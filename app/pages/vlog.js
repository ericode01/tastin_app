import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { VideoPost } from "../../components";
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import { Post } from '../../src/models';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { TouchableOpacity } from "react-native-gesture-handler";

const Vlog = () => {
  const [currentPost, setCurrentPost] = useState();
  const [currentPostUser, setCurrentPostUser] = useState();
  const [currentBusiness, setCurrentBusiness] = useState();
  const params = useLocalSearchParams();

  console.log("Vlog", params)

  useEffect(() => {
    fetchPost().then((value) => {
      setCurrentPost(value[0]);
      setCurrentPostUser(value[1]);
      setCurrentBusiness(value[2]);
    });
  }, []);

  async function fetchPost() {
    try {
      const posts = await DataStore.query(Post, (p) => p.id.eq(params.post_id));
      const user = await posts[0].user;
      const business = await posts[0].business;
      console.log('Vlog posts retrieved successfully!', JSON.stringify(posts, null, 2));
      console.log('Vlog posts retrieved successfully2!', JSON.stringify(user, null, 2));
      return [posts[0], user, business];
    } catch (error) {
      console.log('Error retrieving Vlog posts', error);
      return null;
    }
  }


  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Post",
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
          headerRight: () => (<TouchableOpacity onPress={ ()=> {console.log(1)} }></TouchableOpacity>),
        }}
        getId={(params) => String(Date.now())}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity onPress={ ()=> {router.back()} }>
          <Text> aaaaaaaaaa</Text>
        </TouchableOpacity>
        {currentPost && currentPostUser && currentBusiness && <VideoPost post={currentPost} user={currentPostUser} business={currentBusiness}/>}
      </ SafeAreaView>
    </>
  );
}

export default Vlog;