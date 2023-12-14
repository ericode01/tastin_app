import { Text, SafeAreaView, View, FlatList, Dimensions } from "react-native";
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
import { BusinessCard } from "../../components";

const Explore = () => {
  const [messages, setMessages] = useState([]);
  const currentLoggedInUser = useContext(CurrentLoggedInUserContext);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello! How can I help you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Weat",
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
      url: "http://50.18.17.243/weatai/ask/",
      data: {
        user_id: currentLoggedInUser.id,
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
            name: "Weat",
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
          backgroundColor: "#FFEFE0",
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
          backgroundColor: "#FFEFE0",
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
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#E4E9F2",
        marginLeft: 0,
        paddingHorizontal: 12,
        fontFamily:"Montserrat-Regular",
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
        <View style={{ minHeight: 20, alignItems: "center" }}>
          <BusinessCard businessId={props.currentMessage.businessId} />
        </View>
      )}
    </>
  );

  const renderMessageText = (props) => (
    <MessageText
      {...props}
      customTextStyle={{ fontFamily:"Montserrat-Regular", }}
    />
  );

  const renderAccessory = (props) => <Text>abc</Text>;

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFEFE0" }}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: currentLoggedInUser.id,
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
            backgroundColor: "#FFEFE0",
            marginHorizontal: 5,
          }}
          renderCustomView={renderCustomView}
          placeholder="Talk to Weat on restaurant, food..."
          renderMessageText={renderMessageText}
        />
      </SafeAreaView>
    </>
  );
};

export default Explore;
