import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from "react-native";
import { Tabs } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BusinessProfilePosts } from "../..";
import { LayoutGrid, MenuSquare, MessagesSquare } from "lucide-react-native";

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
      <Text>Under developmemt 🚀</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const BusinessProfileMenu = ({ business }) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FF770F",
          headerShown: false,
          tabBarGap: 0,
          tabBarStyle: {
            width: 210,
            justifyContent: "space-evenly",
            backgroundColor: "#FFFFF4",
            alignSelf: "center",
            marginTop: 0,
            marginBottom: 5,
            zIndex: 0,
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
          // component={BusinessProfilePosts}
          children={() => <BusinessProfilePosts business={business} />}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            /* tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
            tabBarIcon: ({ color }) => (
              <LayoutGrid size={24} color={color} strokeWidth={2} />
            ),
          }}
        />
        <Tab.Screen
          name="BusinessMenu"
          component={SettingsScreen}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            tabBarIcon: ({ color }) => (
              <MenuSquare size={24} color={color} strokeWidth={2} />
            ),
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
          }}
        />
        <Tab.Screen
          name="Reviews"
          component={SettingsScreen}
          options={{
            /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
            tabBarIcon: ({ color }) => (
              <MessagesSquare size={24} color={color} strokeWidth={2} />
            ),
            /* ({ color }) => <Home height={24} width={24} color={color} />, */
          }}
        />
        {/* <Tab.Screen
          name="LikedPosts"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="robot-happy"
                size={24}
                color={color}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BusinessProfileMenu;
