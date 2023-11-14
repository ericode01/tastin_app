import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DataStore } from 'aws-amplify';

import { Plog, VideoPost } from '../../components';
import posts from '../../data/posts';
import { Business, User, Post as PostModel } from '../../src/models';

const Home = () => {
    const [postsFullInfo, setPostsFullInfo] = useState();

    useEffect(() => {
        fetchPostsFullInfo().then(setPostsFullInfo);
    }, []);

    async function fetchPostsFullInfo() {
        try {
            var tempPostsFullInfo = []
            const posts = await DataStore.query(PostModel);
            console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));

            /* DataStore.query(PostModel)
            .then((posts)=>{
                for (const post of posts) {
                    const postFullInfo={};
                    postFullInfo["post"]=post;
                    console.log('Post !', JSON.stringify(post, null, 2)); 
                    post.user.then((user)=>postFullInfo["user"] = user);
                    console.log('user !', JSON.stringify(postFullInfo["user"], null, 2)); 
                    post.business.then((business)=>postFullInfo["business"]=business)
                    console.log('business !', JSON.stringify(postFullInfo["business"], null, 2)); 
                    tempPostsFullInfo.push(postFullInfo)
                }
            }) */

            for (const post of posts) {
                const user = await post.user;
                const business = await post.business;
                tempPostsFullInfo.push({"post": post, "user": user, "business": business})
            }

            console.log('tempPostsFullInfo retrieved successfully!', JSON.stringify(tempPostsFullInfo, null, 2));

            return tempPostsFullInfo
            //DataStore.delete(post[0]);
        } catch (error) {
            console.log('Error retrieving Posts', error);
        }
    }

    return (
        //<SafeAreaView>
        // <GestureHandlerRootView>
        <View>
            {postsFullInfo && <FlatList
                data={postsFullInfo}
                renderItem={({ item }) => {

                    if (item.post.post_type === "VLOG") {
                        return (<VideoPost post={item.post} user={item.user} business={item.business} />);
                    }
                    else {
                        return (<Plog post={item} />);
                    }
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={Dimensions.get('screen').width}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
            />}
        </View>
        // </GestureHandlerRootView>
        //</SafeAreaView>
    )
}

export default Home;