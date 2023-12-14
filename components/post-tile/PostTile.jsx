import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import {
  Play,
  Heart,
} from "lucide-react-native";

const PostTile = ({ post }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  async function fetchUser() {
    try {
      const user = await post.user;
      //console.log('PostTile user retrieved successfully!', JSON.stringify(user, null, 2));
      return user;
    } catch (error) {
      console.log("Error retrieving PostTile user", error);
      return null;
    }
  }

  const showPost = () => {
    router.push({ pathname: "pages/vlog", params: { post_id: post.id } });
  };

  return (
    user && (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 2,
          marginBottom: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',

          //backgroundColor: "#fff", // Card background color
          borderRadius: 10, // Rounded corners for the card
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 2.62,
          elevation: 4, // Elevation for Android
          //marginHorizontal: 15, // Center the card horizontally
        }}
      >
        <TouchableOpacity onPress={showPost} style={{marginTop:5}}>
          <Image
            source={{ uri: post.cover_image_url }}
            style={{
              width: "95%",
              height: 250,
              alignSelf: "center",
             //marginHorizontal:5,
             borderRadius:10,
            }}
            resizeMode="cover"
          />
          {post.post_type === "VLOG" && (
            <Play size={20} color={"white"} strokeWidth={2} fill="white" style={{ position: "absolute", top: 10, right: 10 }}/>
          )}
          <Text style={{marginHorizontal:5, marginTop: 5, fontFamily: 'Montserrat-Regular',}}>{post.title}</Text>
        </TouchableOpacity>
        <View style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            marginHorizontal:5, 
            marginVertical:5,
            }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={{ uri: user.profile_picture_url }}
              style={{
                width: 14,
                height: 14,
                borderRadius: 14,
                borderWidth: 0,
                borderColor: "#fff",
              }}
            />
            <Text style={{ marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize:14,}}>{user.username}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
            <Heart size={14} color={"#FF770F"} strokeWidth={2} fill="#FF770F"/>
            </TouchableOpacity>
            <Text style={{ marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize:14 }}>123</Text>
          </View>
        </View>
      </View>
    )
  );
};

export default PostTile;
