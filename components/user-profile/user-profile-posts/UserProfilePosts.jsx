import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import posts from "../../../data/posts";
import PostTile from "../../post-tile/PostTile";
import MasonryList from 'reanimated-masonry-list';
import { DataStore } from 'aws-amplify';
import { User, Post } from '../../../src/models';

const UserProfilePosts = ({ userInfo }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchUserPosts().then(setUserPosts);
  }, []);

  async function fetchUserPosts() {
    try {
      //console.log('Before Posts retrieve!', JSON.stringify(userInfo, null, 2));
     /*  const user = await DataStore.query(User, userInfo.id);
      console.log('Before Posts retrieve!!!!', JSON.stringify(user, null, 2)); */
      //const posts = await user.posts.toArray();
      const posts = await DataStore.query(Post, p => p.user.id.eq(userInfo.id));
      //console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
      return posts;
    } catch (error) {
      console.log('Error retrieving Posts', error);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", marginHorizontal: 2 }}>
      {userPosts && <MasonryList
        data={userPosts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          console.log(item.cover_image_url);
          return (<PostTile post={item} />);
        }
        }
      /*                 style={{ alignItems: "flex-start" }}
                      contentContainerStyle={{
                          flexDirection:"column",
                          alignItems: "stretch"
                      }} */
      /* style={{backgroundColor: "red"}} */
      /* refreshing={isLoadingNext}
      onRefresh={() => refetch({ first: ITEM_CNT })}
      onEndReachedThreshold={0.1}
      onEndReached={() => loadNext(ITEM_CNT)} */
      />}
    </View>
  );
}

export default UserProfilePosts;