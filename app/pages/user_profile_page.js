import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { UserProfile } from "../../components";
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import { User } from '../../src/models';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { TouchableOpacity } from "react-native-gesture-handler";

const UserProfilePage = () => {
  const [profileUser, setProfileUser] = useState();
  const params = useLocalSearchParams();

  useEffect(() => {
    fetchUser().then(setProfileUser);
  }, []);

  async function fetchUser() {
    try {
      const users = await DataStore.query(User, (p) => p.id.eq(params.user_id));
      console.log('user_profile user retrieved successfully!', JSON.stringify(users, null, 2));
      return users[0];
    } catch (error) {
      console.log('Error retrieving user_profile user', error);
      return null;
    }
  }


  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "User",
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
          headerRight: () => (<TouchableOpacity onPress={ ()=> {console.log(1)} }></TouchableOpacity>),
        }}
        getId={() => String(Date.now())}
      />
      <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
          { profileUser && <UserProfile userInfo={profileUser} /> }
        </ SafeAreaView>
    </>
  );
}

export default UserProfilePage;