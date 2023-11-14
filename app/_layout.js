import { Stack } from 'expo-router/stack';
import { Authenticator } from '@aws-amplify/ui-react-native';
import awsconfig from '../src/aws-exports';
import { Amplify } from 'aws-amplify';
import 'core-js/full/symbol/async-iterator';
import { CurrentLoggedInUserContext } from '../contexts/CurrentLoggedInUserContext'

Amplify.configure(awsconfig);

/* export const unstable_settings = {
  initialRouteName: '/screens/me',
}; */

export default function Layout() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <CurrentLoggedInUserContext.Provider value={{ id: "6dcc6ed6-2b02-4db6-83cf-78271c5ae4d3" }}>
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