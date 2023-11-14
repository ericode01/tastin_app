import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { CommentItem } from "../../..";

const CommentItemGroup = ({ commentItemGroup }) => {
    return (
        <View>
            <CommentItem commentItem={commentItemGroup.postComment} isReply={false} />
            <FlatList
                data={commentItemGroup.postCommentReplies}
                renderItem={({ item }) => (
                    <View style={{marginLeft:45}}>
                        <CommentItem commentItem={item} isReply={true} />
                    </View>
                )}
                vertical
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default CommentItemGroup;