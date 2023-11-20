import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { VideoPost } from "../../components";
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import { Post, UserPostLike } from '../../src/models';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from 'react';
import { CurrentLoggedInUserContext } from '../../contexts/CurrentLoggedInUserContext';

const Vlog = () => {
  const [postFullInfo, setPostFullInfo] = useState();

  const params = useLocalSearchParams();
  const currentLoggedInUser = useContext(CurrentLoggedInUserContext);

  console.log("Vlog", params)

  useEffect(() => {
    fetchPostFullInfo().then(setPostFullInfo);
  }, []);

  async function fetchPostFullInfo() {
    try {
      const posts = await DataStore.query(Post, (p) => p.id.eq(params.post_id));
      const post = posts[0];
      console.log('Vlog post retrieved successfully!', JSON.stringify(post, null, 2));
      const user = await post.user;
      const business = await post.business;
      const allUserPostLikeArr = await DataStore.query(UserPostLike, (upl) => upl.post.id.eq(post.id));
      const userPostLikeArr = await DataStore.query(UserPostLike, (upl) => upl.and(upl => [
        upl.post.id.eq(post.id),
        upl.user.id.eq(currentLoggedInUser.id)
      ]
      ));

      const tempPostFullInfo = {
        "post": post,
        "user": user,
        "business": business,
        "user_post_like_count": allUserPostLikeArr.length,
        "user_post_like": userPostLikeArr.length > 0,
        "user_post_like_obj": userPostLikeArr.length > 0 ? userPostLikeArr[0] : null,
        "user_post_like_changed": false,
        "is_current": true,
      };

      console.log('Vlog tempPostFullInfo retrieved successfully!', JSON.stringify(tempPostFullInfo, null, 2));
      return tempPostFullInfo;
    } catch (error) {
      console.log('Error retrieving Vlog tempPostFullInfo', error);
      return null;
    }
  }

  function updateUserPostLike() {
    if (postFullInfo.user_post_like_changed && postFullInfo.user_post_like) {
      addUserPostLike(postFullInfo);
    }
    else if (postFullInfo.user_post_like_changed && !postFullInfo.user_post_like) {
      deleteUserPostLike(postFullInfo);
    }
  }

  async function addUserPostLike(postFullInfoToUpdate) {
    try {
      console.log(' addUserPostLike triggered');
      const newUserPostLike = await DataStore.save(
        new UserPostLike({
          post: postFullInfoToUpdate.post,
          user: currentLoggedInUser,
        })
      );
    } catch (error) {
      console.log('Error updateUserPostLike', error);
    }
  }

  async function deleteUserPostLike(postFullInfoToDelete) {
    try {
      console.log(' deleteUserPostLike triggered');
      await DataStore.delete(UserPostLike, upl => upl.id.eq(postFullInfoToDelete.user_post_like_obj.id));
    } catch (error) {
      console.log('Error deleteUserPostLike', error);
    }
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Post",
          /* headerBackTitle: "Back",
          headerBackTitleVisible: true, */
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              router.back();
              updateUserPostLike();
            }}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
        }}
        getId={(params) => String(Date.now())}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {/* <TouchableOpacity onPress={() => { router.back() }}>
          <Text> aaaaaaaaaa</Text>
        </TouchableOpacity> */}
        {postFullInfo && <VideoPost postFullInfo={postFullInfo} />}
      </ SafeAreaView>
    </>
  );
}

export default Vlog;