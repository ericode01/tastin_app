import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./comments.style";
// import comments from "../../../data/comments";
import { CommentItemGroup } from "../..";
import { useEffect, useState } from "react";
import { PostComment, PostCommentReply } from "../../../src/models";
import { DataStore } from "aws-amplify";

const Comments = ({ post }) => {
  const [postCommentsFullInfo, setPostCommentsFullInfo] = useState();

  useEffect(() => {
    fetchPostCommentsFullInfo().then(setPostCommentsFullInfo);
  }, []);

  async function fetchPostCommentsFullInfo() {
    try {
      var tempPostCommentsFullInfo = [];
      const postComments = await DataStore.query(PostComment, (pc) =>
        pc.post.id.eq(post.id)
      );
      //console.log('postComments retrieved successfully!', JSON.stringify(postComments, null, 2));

      for (const postComment of postComments) {
        const postCommentReplies = await DataStore.query(
          PostCommentReply,
          (pcr) => pcr.post_comment.id.eq(postComment.id)
        );
        tempPostCommentsFullInfo.push({
          postComment: postComment,
          postCommentReplies: postCommentReplies,
        });
      }

      //console.log('tempPostCommentsFullInfo retrieved successfully!', JSON.stringify(tempPostCommentsFullInfo, null, 2));

      return tempPostCommentsFullInfo;
      //DataStore.delete(post[0]);
    } catch (error) {
      console.log("Error retrieving tempPostCommentsFullInfo", error);
    }
  }

  return (
    <>
      {postCommentsFullInfo && (
        <View
          style={{
            //backgroundColor: "#fff", // Card background color
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
          }}
        >
          <View
            style={{
              marginHorizontal: 25,
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 16, marginTop: 5, fontFamily: "Montserrat-Regular", }}>
              {postCommentsFullInfo.length} Comments
            </Text>
          </View>

          <View style={{ marginHorizontal: 15 }}>
            <FlatList
              data={postCommentsFullInfo}
              renderItem={({ item }) => (
                <CommentItemGroup commentItemGroup={item} />
              )}
              vertical
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Comments;
