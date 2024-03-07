import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Store } from "lucide-react-native";

import styles from "./description.style";
import posts from "../../../data/posts";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const Description = ({ post, business }) => {
  //const post = posts[0];
  const router = useRouter();

  return (
    <View
      style={{
        //marginHorizontal: 15
        //backgroundColor: "#fff", // Card background color
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 10, // Rounded corners for the card
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.62,
        elevation: 4, // Elevation for Android
        marginHorizontal: 15, // Center the card horizontally
        //backgroundColor:"#FFF4E1"
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 25,
        }}
        onPress={() =>
          router.push({
            pathname: "pages/business_profile_page",
            params: { business_id: business.id },
          })
        }
      >
        <Store size={16} color={"black"} strokeWidth={2}/>
        <Text
          style={{
            fontFamily: "Montserrat-Regular",
            fontSize: 16,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
          }}
        >
          {business.name}
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          fontSize: 16,
          marginBottom: 5,
          marginHorizontal: 25,
        }}
      >
        {post.title}
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat-Regular",
          fontSize: 16,
          marginHorizontal: 25,
          color: "#003B4A",
        }}
      >
        {post.description}
      </Text>
      {/*             <Text style={{ fontFamily: 'Nunito_Sans_regular', fontSize: 16 }}>{post.description}</Text>
            <Text style={{ fontFamily: 'Nunito_Sans_regular', fontSize: 16 }}>{post.description}</Text> */}

      <View style={{ marginTop: 5, marginBottom: 5, opacity: 0.5 }}>
        <Text
          style={{
            fontFamily: "Montserrat-Regular",
            fontSize: 14,
            marginHorizontal: 25,
          }}
        >
          {post.createdAt}
        </Text>
      </View>
    </View>
  );
};

export default Description;
