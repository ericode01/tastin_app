import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
/* import { Home, BubbleSearch, Plus, EmojiTalkingHappy, User, EmojiSatisfied } from 'iconoir-react-native'; */

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, tabBarActiveTintColor: '#ff8c1a', headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} /> */
          tabBarIcon: ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
          /* ({ color }) => <Home height={24} width={24} color={color} />, */
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          tabBarIcon: ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
          /* ({ color }) => <BubbleSearch height={24} width={24} color={color} />, */
          title: "Explore"
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
          title: "Create"
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          /* ({ color }) => <Plus height={40} width={40} color={color} />, */
        }}
      />
      <Tabs.Screen
        name="hangout"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          tabBarIcon: ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
          title: "Hangout"
          /* ({ color }) => <EmojiSatisfied height={24} width={24} color={color} />, */
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          /* ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />, */
          tabBarIcon: ({color})=><MaterialCommunityIcons name="robot-happy" size={24} color={color} />,
          title: "Me"
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
}