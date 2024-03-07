import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from "react-native";
import { Tabs } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UserProfilePosts, UserProfileLikedPosts } from "../..";
import { LayoutGrid, Star, Bookmark, Heart } from "lucide-react-native";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Under development 🚀</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const UserProfileMenu = ({ userInfo }) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FF770F",
          headerShown: false,
          tabBarGap: 0,
          tabBarStyle: {
            width: 280,
            justifyContent: "space-evenly",
            backgroundColor: "#FFFFF4",
            alignSelf: "center",
            marginTop: 0,
            zIndex: 0,
            marginBottom: 5,
            borderColor: "black",
            shadowOpacity: 0,
          },
          tabBarItemStyle: {
            width: 70,
            alignItems: "center",
            paddingBottom: 1,
          },
          tabBarIndicatorStyle: {
            width: 30,
            backgroundColor: "black",
          },
          tabBarIndicatorContainerStyle: {
            marginLeft: 20,
          },
        }}
      >
        <Tab.Screen
          name="Posts"
          //component={UserProfilePosts}
          children={() => <UserProfilePosts userInfo={userInfo} />}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            /* tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
            tabBarIcon: ({ color }) => (
              <LayoutGrid size={24} color={color} strokeWidth={2} />
            ),
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
          }}
        />
        <Tab.Screen
          name="StaredBusiness"
          component={SettingsScreen}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            tabBarIcon: ({ color }) => (
              <Star size={24} color={color} strokeWidth={2} />
            ),
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
          }}
        />
        <Tab.Screen
          name="SavedPosts"
          component={SettingsScreen}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            tabBarIcon: ({ color }) => (
              <Bookmark size={24} color={color} strokeWidth={2} />
            ),
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
          }}
        />
        <Tab.Screen
          name="LikedPosts"
          children={() => <UserProfileLikedPosts userInfo={userInfo} />}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            tabBarIcon: ({ color }) => (
              <Heart size={24} color={color} strokeWidth={2} />
            ),
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserProfileMenu;
