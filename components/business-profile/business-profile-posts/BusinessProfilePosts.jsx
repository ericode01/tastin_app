import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import posts from "../../../data/posts";
import PostTile from "../../post-tile/PostTile";
import MasonryList from 'reanimated-masonry-list';
import { useEffect, useState } from 'react';
import { Post } from "../../../src/models";
import { DataStore } from 'aws-amplify';

const BusinessProfilePosts = ({business}) => {
    const [businessPosts, setBusinessPosts] = useState([]);

    useEffect(() => {
        fetchBusinessPosts().then(setBusinessPosts);
      }, []);

    async function fetchBusinessPosts(){
        try {
        //const posts = await business.posts.toArray();
        const posts = await DataStore.query(Post, p => p.business.id.eq(business.id));
          console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
          return posts;
        } catch (error) {
          console.log('Error retrieving Posts', error);
        }
      }
      
    return (
        <View style={{ flex: 1, backgroundColor: "#FFEFE0", paddingHorizontal: 15 }}>
            <MasonryList
                data={businessPosts}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (<PostTile post={item} />)}
            /*                 style={{ alignItems: "flex-start" }}
                            contentContainerStyle={{
                                flexDirection:"column",
                                alignItems: "stretch"
                            }} */
            /* style={{backgroundColor: "red"}} */
            /* refreshing={isLoadingNext}
            onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadNext(ITEM_CNT)} */
            />
        </View>
    );
}

export default BusinessProfilePosts;