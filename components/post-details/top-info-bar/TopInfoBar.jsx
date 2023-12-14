import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
/* import {PinAlt, Star, Heart, BookmarkEmpty, Telegram} from 'iconoir-react-native'; */

import styles from "./topinfobar.style";
import posts from "../../../data/posts";
import { useRouter } from "expo-router";

const TopInfoBar = ({ post, business, user }) => {
  //const post = posts[0];
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() =>
            router.push({
              pathname: "pages/user_profile_page",
              params: { user_id: user.id },
            })
          }
        >
          <Image
            style={styles.profilePicture}
            source={{ uri: user.profile_picture_url }}
          />
          <Text style={styles.username}>{user.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followButtonContainer}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.restaurantInfoContainer}>
                <TouchableOpacity >
                    <View style={styles.restaurantContainer}>
                        
                        <Text style={styles.restaurantName}>{business.name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restaurantStarContainer}>
                    
                    <Text>restaurant star</Text>
                </TouchableOpacity>
            </View> */}
    </View>
  );
};

export default TopInfoBar;
