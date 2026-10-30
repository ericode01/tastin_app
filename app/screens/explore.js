import {
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { BusinessProfile } from "../../components";
import React, { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  InputToolbar,
  Actions,
  Composer,
  Send,
  MessageText,
} from "react-native-gifted-chat";
import axios from "axios";
import { CurrentLoggedInUserContext } from "../../contexts/CurrentLoggedInUserContext";
import { useContext } from "react";
import { BusinessCard, HomePage } from "../../components";
import SwipeUpDown from "react-native-swipe-up-down";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TalkingPeopleImage from "../../assets/talking_people.png";
import { ScrollView } from "react-native-gesture-handler";

const Explore = () => {
  const [messages, setMessages] = useState([]);
  const currentLoggedInUser = useContext(CurrentLoggedInUserContext);
  const [disableSwipeIcon, setDisableSwipeIcon] = useState(true);
  const [chatPanelUp, setChatPanelUp] = useState(false);

  const width = Dimensions.get("window").width;

  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello! I'm Tastin. What kind of restaurant are you looking for? And in which area? Just tell me any preferences you have.😀😀",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Tastin",
          avatar:
            "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?w=826&t=st=1701909629~exp=1701910229~hmac=9a0a2a1cc102cc79953fe2a6c1e94346f96e4c9956fe55a913c7991d560d0e0c",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const userMessage = messages[0].text.trim();

    axios({
      method: "post",
      url: process.env.EXPO_PUBLIC_TASTIN_AI_URL,
      data: {
        //user_id: currentLoggedInUser.id,
        user_id: 1,
        session_id: "aaa",
        user_prompt: userMessage,
      },
    })
      .then((response) => {
        console.log("getting data from weatai", response.data);
        const weatAiResponseMessage = {
          _id: Math.random().toString(36).substring(7),
          text: response.data.agent_response_text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Tastin",
            avatar:
              "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?w=826&t=st=1701909629~exp=1701910229~hmac=9a0a2a1cc102cc79953fe2a6c1e94346f96e4c9956fe55a913c7991d560d0e0c",
          },
        };

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [weatAiResponseMessage])
        );

        if (
          response.data.agent_references !== undefined &&
          "references" in response.data.agent_references &&
          "business_id" in response.data.agent_references.references &&
          "show_references" in response.data.agent_references &&
          response.data.agent_references.show_references
        ) {
          const businessIds =
            response.data.agent_references.references.business_id;

          businessIds.forEach((businessId) => {
            var businessCardMessage = {
              _id: Math.random().toString(36).substring(7),
              user: {
                _id: 2,
                name: "Weat",
                avatar:
                  "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?w=826&t=st=1701909629~exp=1701910229~hmac=9a0a2a1cc102cc79953fe2a6c1e94346f96e4c9956fe55a913c7991d560d0e0c",
              },
              businessId: businessId,
            };

            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, [businessCardMessage])
            );
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "#F6FFF5",
          borderTopWidth: 0,
          paddingTop: 0,
          marginBottom: 0,
          marginTop: 0,
          paddingBottom: 0,
          position: "relative",
          marginHorizontal: 15,
          /* borderTopColor: "#E8E8E8",
          borderColor: "#E8E8E8",
          borderTopWidth: 1,
          borderWidth:1,
          padding: 0,
          margin:0 */
        }}
        primaryStyle={{
          backgroundColor: "#F6FFF5",
        }}
      />
    );
  };

  const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={{
        color: "#222B45",
        // backgroundColor: '#EDF1F7',
        backgroundColor: "#F6FFF5",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E4E9F2",
        marginLeft: 0,
        paddingHorizontal: 12,
        fontFamily: "Montserrat-Regular",
        /* paddingTop: 0,
        paddingHorizontal: 12,
        
        marginTop:0,
        marginBottom:0 */
      }}
    />
  );

  const renderCustomView = (props) => (
    <>
      {props.currentMessage.businessId && (
        <View
          style={{ minHeight: 20, alignItems: "center", width: width * 0.7 }}
        >
          <BusinessCard businessId={props.currentMessage.businessId} />
        </View>
      )}
    </>
  );

  const renderMessageText = (props) => (
    <MessageText
      {...props}
      customTextStyle={{ fontFamily: "Montserrat-Regular" }}
    />
  );

  const renderSwipePanelMiniView = (props) => (
    <>
      {/* <Image
        source={require("../../assets/food_pattern_3.png")}
        style={{
          width:windowWidth,
          height:100, 
          resizeMode: 'cover',
          opacity:0.1,
        }}
      /> */}

      <View
        style={{
          /* position: "absolute",
          top: 10,
          left: 100, */
          justifyContent: "center",
          alignItems: "center",
          //marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 16,
            color: "white",
            marginTop: -5,
          }}
        >
          Swipe up to ask Tastin 🍝🌮🥗
        </Text>
      </View>

      {/* <Text style={{fontFamily: "Montserrat-Regular"}}>Ask Tastins</Text> */}
    </>
  );

  const renderAccessory = (props) => <Text>abc</Text>;

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFF4" }}>
        <ScrollView style={{ marginBottom: 42 }}>
          <HomePage />
        </ScrollView>
        <SwipeUpDown
          itemMini={renderSwipePanelMiniView}
          disableSwipeIcon={false}
          itemFull={(hide) => (
            <GiftedChat
              messages={messages}
              onSend={(messages) => onSend(messages)}
              user={{
                //_id: currentLoggedInUser.id,
                _id: 1,
                name: "User",
                avatar:
                  "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?w=826&t=st=1698805787~exp=1698806387~hmac=8aea0ab2f11c0ef6d5db704c87d892ceedaede9e8e27061162603731c3459ece",
              }}
              showUserAvatar={true}
              showAvatarForEveryMessage={false}
              alignTop={false}
              multiline={false}
              renderInputToolbar={(props) => customtInputToolbar(props)}
              renderComposer={renderComposer}
              scrollToBottom
              renderAvatarOnTop
              messagesContainerStyle={{
                backgroundColor: chatPanelUp ? "#F6FFF5" : "#ff770f",
                marginHorizontal: 5,
              }}
              renderCustomView={renderCustomView}
              placeholder="Ask Tastin about restaurant, food..."
              renderMessageText={renderMessageText}
            />
          )}
          onShowMini={() => {
            setDisableSwipeIcon(true);
            setChatPanelUp(false);
          }}
          onShowFull={() => {
            setDisableSwipeIcon(false);
            setChatPanelUp(true);
          }}
          animation="easeInEaseOut"
          //disableSwipeIcon
          extraMarginTop={50}
          iconColor="lightgrey"
          iconSize={30}
          style={{
            backgroundColor: chatPanelUp ? "#F6FFF5" : "#ff770f",
            paddingBottom: tabBarHeight + insets.bottom,

            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

            borderWidth: chatPanelUp ? 4 : 0,
            borderColor: "rgba(0, 0, 0, 0.05)",

            //shadowColor: "#000",
            /* shadowOffset: {
              width: 0,
              height: 2,
            }, */
            //shadowOpacity: 0.15,
            //shadowRadius: 2.62,
            //elevation: 4, // Elevation for Android
          }} // style for swipe
          swipeHeight={tabBarHeight + 20}
        />
      </SafeAreaView>
    </>
  );
};

export default Explore;
