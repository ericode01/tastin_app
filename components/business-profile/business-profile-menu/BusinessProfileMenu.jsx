import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BusinessProfilePosts} from '../..';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white"}}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

const BusinessProfileMenu = ({business}) => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#ff8c1a',
                    headerShown: false,
                    tabBarGap:0,
                    tabBarStyle:{
                        width:280, 
                        justifyContent:"space-evenly", 
                        backgroundColor:"white",
                        alignSelf:"center"
                    },
                    tabBarItemStyle: {
                        width:70, 
                        alignItems:"center"
                    },
                    tabBarIndicatorStyle :{
                        width:30,
                        backgroundColor:'black'
                  },
                  tabBarIndicatorContainerStyle:{
                    marginLeft:20
                  }
                }}>
                <Tab.Screen
                    name="Posts"
                    // component={BusinessProfilePosts}
                    children={()=><BusinessProfilePosts business={business}/>}
                    options={{
                        /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
                        /* ({ color }) => <Home height={24} width={24} color={color} />, */
                    }}
                />
                <Tab.Screen
                    name="StaredBusiness"
                    component={SettingsScreen}
                    options={{
                        /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
                        /* ({ color }) => <Home height={24} width={24} color={color} />, */
                    }}
                />
                <Tab.Screen
                    name="SavedPosts"
                    component={SettingsScreen}
                    options={{
                        /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
                        /* ({ color }) => <Home height={24} width={24} color={color} />, */
                    }}
                />
                <Tab.Screen
                    name="LikedPosts"
                    component={SettingsScreen}
                    options={{
                        /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
                        /* ({ color }) => <Home height={24} width={24} color={color} />, */
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BusinessProfileMenu;