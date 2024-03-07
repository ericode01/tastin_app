import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge } from "react-native-ui-lib";
import { useContext } from "react";
import { CurrentLoggedInUserContext } from "../../../contexts/CurrentLoggedInUserContext";
import { useAuthenticator } from "@aws-amplify/ui-react-native";

const UserInfoSection = ({ userInfo }) => {
  const currentLoggedInUser = useContext(CurrentLoggedInUserContext);
  const { signOut } = useAuthenticator();

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',

        //backgroundColor: "#fff", // Card background color
        borderRadius: 10, // Rounded corners for the card
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.62,
        elevation: 4, // Elevation for Android
        marginHorizontal: 15, // Center the card horizontally,
        zIndex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 5,
          }}
        >
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>30</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>Posts</Text>
        </View>
        <View
          style={{
            height: 25,
            width: 1,
            backgroundColor: "#bfbfbf",
            marginHorizontal: 0,
          }}
        />

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>50</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>Saves & Likes</Text>
        </View>

        <View>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 80,
              borderWidth: 0,
              borderColor: "#fff",
            }}
            //source={{ uri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576" }}
            source={{ uri: userInfo.profile_picture_url }}
          />
          {userInfo.id === currentLoggedInUser.id ? (
            <Badge
              label={"Sign out"}
              size={16}
              style={{ position: "absolute", top: 5, right: -27 }}
              onPress={signOut}
              backgroundColor="#ff8c1a"
              labelStyle={{ color: "white", fontFamily: "Montserrat-Regular", }}
              borderWidth="0"
              borderColor="white"
            />
          ) : (
            <Badge
              label={"Follow"}
              size={16}
              style={{ position: "absolute", top: 5, right: -18 }}
              onPress={() => {
                console.log("badge pressed");
              }}
              backgroundColor="#FF770F"
              labelStyle={{ color: "white", fontFamily: 'Montserrat-Regular', }}
              borderWidth="0"
              borderColor="white"
            />
          )}
        </View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>40</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>Followers</Text>
        </View>

        <View
          style={{
            height: 25,
            width: 1,
            backgroundColor: "#bfbfbf",
            marginHorizontal: 0,
          }}
        />

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>50</Text>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular', }}>Followings</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5,
          marginHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Regular', }}>{userInfo.username}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 5,
          marginBottom: 10,
          marginHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Regular', }}>{userInfo.description}</Text>
      </View>
    </View>
  );
};

export default UserInfoSection;
