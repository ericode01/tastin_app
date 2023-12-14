import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Rocket, PlusCircle, PartyPopper, UserRound } from 'lucide-react-native';
/* import { Home, BubbleSearch, Plus, EmojiTalkingHappy, User, EmojiSatisfied } from 'iconoir-react-native'; */

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#ff770f",
        tabBarInactiveTintColor:"#BDB1A6",
        headerShown: false,
        tabBarStyle:{
          backgroundColor:"black",
          borderTopColor:"black",
          borderTopWidth:0,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="home"
              size={24}
              color={color}
              stroke-width={1.5}
            />
          ),
          /* ({ color }) => <Home height={24} width={24} color={color} />, */
          tabBarLabel: "Home",
          tabBarLabelStyle:{
            fontFamily:"Montserrat-Regular"
          }
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          tabBarIcon: ({ color }) => (
            <Rocket
              size={24}
              color={color}
              strokeWidth={1.5}
            />
          ),
          /* ({ color }) => <BubbleSearch height={24} width={24} color={color} />, */
          tabBarLabel: "Explore",
          tabBarLabelStyle:{
            fontFamily:"Montserrat-Regular"
          }
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color }) => (
            <PlusCircle
              size={24}
              color={color}
              strokeWidth={1.5}
            />
          ),
          tabBarLabel: "Create",
          tabBarLabelStyle:{
            fontFamily:"Montserrat-Regular"
          }
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          /* ({ color }) => <Plus height={40} width={40} color={color} />, */
        }}
      />
      <Tabs.Screen
        name="hangout"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          tabBarIcon: ({ color }) => (
            <PartyPopper
              size={24}
              color={color}
              strokeWidth={1.5}
            />
          ),
          tabBarLabel: "Hangout",
          tabBarLabelStyle:{
            fontFamily:"Montserrat-Regular"
          }
          /* ({ color }) => <EmojiSatisfied height={24} width={24} color={color} />, */
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          tabBarIcon: ({ color }) => (
            <UserRound
              size={24}
              color={color}
              strokeWidth={1.5}
            />
          ),
          tabBarLabel: "Me",
          tabBarLabelStyle:{
            fontFamily:"Montserrat-Regular"
          }
          /* ({ color }) => <User height={24} width={24} color={color} />, */
        }}
      />
      {/* <Tabs.Screen
        // Name of the route to hide.
        name="pages/vlog"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      /> */}
    </Tabs>
  );
};
