import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

import { PostDetailsDescription, PostDetailsComments, PostDetailsTopInfoBar, PlogPic, CommentInputBar } from "..";

const Plog = ({ post }) => {
    return (
        <SafeAreaView style={{ width: Dimensions.get("screen").width, height: "100%" }}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{height: "100%"}}
            >
                <PostDetailsTopInfoBar />

                <ScrollView>
                    <PlogPic images={post.images} />

                    <PostDetailsDescription />
                    <PostDetailsComments />
                </ScrollView>

                <View style={{ height: 40, alignItems: "center" }}>
                    <CommentInputBar />
                </View>


            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

export default Plog;