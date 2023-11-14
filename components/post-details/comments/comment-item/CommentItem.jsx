import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Octicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';


const CommentItem = ({ commentItem, isReply }) => {
    
    const [postCommentUser, setPostCommentUser] = useState();

    useEffect(() => {
        fetchPostCommentUser().then(setPostCommentUser);
    }, []);

    async function fetchPostCommentUser() {
        try {
            const tempPostCommentUser = await commentItem.user;

            return tempPostCommentUser;
            //DataStore.delete(post[0]);
        } catch (error) {
            console.log('Error retrieving tempPostCommentUser', error);
        }
    }

    return (
        <>
        {postCommentUser && <View style={{ flexDirection: "column", alignItems: "flex-start", marginBottom: isReply ? 5 : -5 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", }}>
                <Image style={{
                    width: isReply ? 20 : 30,
                    height: isReply ? 20 : 30,
                    borderRadius: isReply ? 20 : 30,
                    borderWidth: 0,
                    borderColor: '#fff',
                    marginLeft: 10,
                    marginRight: 5
                }} source={{ uri: postCommentUser.profile_picture_url }} />
                <Text style={{ fontSize: 15, opacity: 0.5, fontFamily: 'Nunito_Sans_regular', }}>{postCommentUser.username}</Text>
                {isReply && (
                    <>
                        <Octicons name="triangle-right" size={20} color="black" style={{marginHorizontal:5}}/>
                        <Text style={{ fontSize: 15, opacity: 0.5, fontFamily: 'Nunito_Sans_regular', }}>{commentItem.reply_to_user_name}</Text>
                    </>
                )}
            </View>
            <View style={{ transform: [{ translateY: isReply ? 0 : -10 }] }}>
                <View style={{ marginLeft: isReply ? 35 : 45, marginRight: 10 }}>
                    <Text style={{ fontSize: 15, fontFamily: 'Nunito_Sans_regular',}}>{commentItem.content}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", }}>
                    <Text style={{fontFamily: 'Nunito_Sans_regular', fontSize: 14, marginLeft: isReply ? 35 : 45, marginRight: 10, opacity: 0.5 }}>06-21-2023</Text>
                    <TouchableOpacity >
                        <Text style={{fontFamily: 'Nunito_Sans_regular', fontSize: 14 }}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>}
        </>

    );
}

export default CommentItem;