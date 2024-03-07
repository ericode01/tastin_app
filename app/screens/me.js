import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { UserProfile } from "../../components";
import {User} from '../../src/models';
import {useEffect, useState} from 'react';
import { DataStore } from 'aws-amplify';
import { useFocusEffect } from "@react-navigation/core";
import { Tabs } from 'expo-router';
import { CurrentLoggedInUserContext } from '../../contexts/CurrentLoggedInUserContext';
import { useContext } from 'react';

const Me = () => {
    const [currentUserInfo, setCurrentUserInfo] = useState();
    const currentLoggedInUser = useContext(CurrentLoggedInUserContext);

    //console.log('before alling fetch data');

    useEffect(() => {
        //console.log('calling fetch data');
        fetchUser().then(setCurrentUserInfo);
        // DataStore.query(User, (u)=>u.id.eq("15e3ad8b-52d8-46b3-a857-cbff85070326")).then(setCurrentUserInfo);
        //console.log('after set state', JSON.stringify(currentUserInfo, null, 2));
      }, []);

      /* useFocusEffect(
        React.useCallback(() => {
          console.log('calling fetch data');
        fetchUser().then(setCurrentUserInfo);
        // DataStore.query(User, (u)=>u.id.eq("15e3ad8b-52d8-46b3-a857-cbff85070326")).then(setCurrentUserInfo);
        console.log('after set state', JSON.stringify(currentUserInfo, null, 2));
      
          return () => {
            // Run  somelogisx when user leave screen,
            // Cleaning caches or cancelling subscriptions
          };
        }, []),
      ); */

    /* console.log('after alling fetch data');
    console.log('after after', JSON.stringify(currentUserInfo, null, 2)); */

    async function fetchUser(){
        try {
          const user = await DataStore.query(User, (u)=>u.id.eq(currentLoggedInUser.id));
          //console.log('User retrieved successfully!', JSON.stringify(user, null, 2));
          return user[0];
        } catch (error) {
          console.log('Error retrieving user', error);
          return null;
        }
      }

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#FFFFF4" }}>
          { currentUserInfo && <UserProfile userInfo={currentUserInfo} /> }
        </ SafeAreaView>
    );
}

export default Me;