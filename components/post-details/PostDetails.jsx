import React from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { PostDetailsDescription, PostDetailsComments, PostDetailsTopInfoBar, CommentInputBar } from "..";

import styles from "./postdetails.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const PostDetails = ({post, business, user}) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ height:"100%" }}
            >
                <PostDetailsTopInfoBar post={post} business={business} user={user}/>

                <ScrollView>
                    <PostDetailsDescription post={post}/>
                    <PostDetailsComments post={post}/>
                </ScrollView>

                <View style={{ height: 40 }}>
                    <CommentInputBar />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default PostDetails;