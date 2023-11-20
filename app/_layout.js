import { Stack } from 'expo-router/stack';
import { Authenticator } from '@aws-amplify/ui-react-native';
import awsconfig from '../src/aws-exports';
import { Amplify, DataStore} from 'aws-amplify';
import 'core-js/full/symbol/async-iterator';
import { CurrentLoggedInUserContext } from '../contexts/CurrentLoggedInUserContext'
import {User} from '../src/models'
import { useState, useEffect } from 'react';

Amplify.configure(awsconfig);

/* export const unstable_settings = {
  initialRouteName: '/screens/me',
}; */

export default function Layout() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState();

  useEffect(() => {
    console.log('calling App Layout fetchUser');
    fetchUser().then(setCurrentLoggedInUser);
    // DataStore.query(User, (u)=>u.id.eq("15e3ad8b-52d8-46b3-a857-cbff85070326")).then(setCurrentUserInfo);
    //console.log('after set state', JSON.stringify(currentUserInfo, null, 2));
  }, []);

  async function fetchUser(){
    try {
      const user = await DataStore.query(User, (u)=>u.id.eq("6dcc6ed6-2b02-4db6-83cf-78271c5ae4d3"));
      //console.log('User retrieved successfully!', JSON.stringify(user, null, 2));
      return user[0];
    } catch (error) {
      console.log('App Layout Error retrieving user', error);
      return null;
    }
  }

  return (
    <Authenticator.Provider>
      <Authenticator>
        <CurrentLoggedInUserContext.Provider value={currentLoggedInUser}>
          <Stack
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name="pages/vlog"
              getId={({ params }) => String(Date.now())}
            />
            <Stack.Screen
              name="pages/user_profile_page"
              getId={({ params }) => String(Date.now())}
            />
            <Stack.Screen
              name="pages/business_profile_page"
              getId={({ params }) => String(Date.now())}
            />
          </Stack>
        </CurrentLoggedInUserContext.Provider>
      </Authenticator>
    </Authenticator.Provider>
  );
}