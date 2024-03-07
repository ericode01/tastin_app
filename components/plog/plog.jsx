import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  PostDetailsDescription,
  PostDetailsComments,
  PostDetailsTopInfoBar,
  PlogPic,
  CommentInputBar,
} from "..";

import posts from "../../data/posts";

const Plog = ({ postFullInfo }) => {
  const [post, setPost] = useState(postFullInfo.post);
  const [user, setUser] = useState(postFullInfo.user);
  const [business, setBusiness] = useState(postFullInfo.business);

  return (
    <SafeAreaView
      style={{
        width: Dimensions.get("screen").width,
        height: "100%",
        flex: 1,
        backgroundColor: "#FFFFF4",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ height: "100%" }}
      >
        <PostDetailsTopInfoBar user={user} />

        <ScrollView>
          <View style={{marginBottom:10}}>
            <PlogPic images={posts[1].images} postFullInfo={postFullInfo} />
          </View>

          <PostDetailsDescription post={post} business={business} />
          <View
            style={{
              marginTop: 10,
            }}
          >
            <PostDetailsComments post={post} />
          </View>
        </ScrollView>

        <View style={{ height: 55 }}>
          <CommentInputBar />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Plog;
