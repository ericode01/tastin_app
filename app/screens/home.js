import React, { useState, useEffect, useContext, useCallback } from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DataStore } from 'aws-amplify';

import { Plog, VideoPost } from '../../components';
import posts from '../../data/posts';
import { Business, User, Post as PostModel, UserPostLike } from '../../src/models';
import { CurrentLoggedInUserContext } from '../../contexts/CurrentLoggedInUserContext';
import { PredicateAll, Predicates } from "@aws-amplify/datastore/lib-esm/predicates";

const Home = () => {
    const [postsFullInfo, setPostsFullInfo] = useState([]);
    const currentLoggedInUser = useContext(CurrentLoggedInUserContext);
    const [currentPostIdDisplayed, setCurrentPostIdDisplayed] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const recordLimit = 3;

    const { height, width } = Dimensions.get('window');

    /* useEffect(() => {
        fetchPostsFullInfo().then(
            (value) => {
                if (value && value.length==2 ) {
                    setPostsFullInfo(value[0]);
                    setPostsFullInfoMap(value[1]);
                }
            });
    }, [currentLoggedInUser]); */

    useEffect(() => {
        fetchPostsFullInfo().then(value =>{
            setPostsFullInfo([...postsFullInfo, ...value]);
            console.log("total items:", postsFullInfo.length)
            setRefreshing(false);
        });
    }, [currentLoggedInUser, currentPage]);

    async function fetchPostsFullInfo() {
        try {
            if (!currentLoggedInUser) {
                return;
            }

            var tempPostsFullInfo = [];
            const posts = await DataStore.query(PostModel, Predicates.ALL, {page: currentPage, limit: recordLimit});
            //console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
            console.log('Posts retrieved successfully! current page', currentPage);

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
                const allUserPostLikeArr = await DataStore.query(UserPostLike, (upl) => upl.post.id.eq(post.id));
                const userPostLikeArr = await DataStore.query(UserPostLike, (upl) => upl.and(upl => [
                    upl.post.id.eq(post.id),
                    upl.user.id.eq(currentLoggedInUser.id)
                ]
                ));
                const tempPostFullInfo = {
                    "post": post,
                    "user": user,
                    "business": business,
                    "user_post_like_count": allUserPostLikeArr.length,
                    "user_post_like": userPostLikeArr.length > 0,
                    "user_post_like_obj": userPostLikeArr.length > 0 ? userPostLikeArr[0] : null,
                    "user_post_like_changed": false,
                    "is_current": false,
                };
                tempPostsFullInfo.push(
                    tempPostFullInfo
                );
            }

            return tempPostsFullInfo;
        } catch (error) {
            console.log('Error retrieving Posts', error);
        }
    }

    const onViewableItemsChanged = React.useRef((props) => {
        const changed = props.changed;
        const viewableItems = props.viewableItems;
        setCurrentPostIdDisplayed(viewableItems[0].item.post.id);

        changed.forEach((item) => {
            if (!item.isViewable) {
                //console.log('_onViewableItemsChanged!!', JSON.stringify(item, null, 2));
                if (item.item.user_post_like_changed && item.item.user_post_like) {
                    addUserPostLike(item.item);
                }
                else if (item.item.user_post_like_changed && !item.item.user_post_like) {
                    deleteUserPostLike(item.item);
                }

                //postsFullInfoMap[item.item.post.id].is_current = false;

                item.item.is_current = false;

            }
            else {
                item.item.is_current = true;
            }

            //console.log('home is_current!!', item.item.post.title, item.item.is_current);
            //console.log('postsFullInfo after updating is_current', JSON.stringify(postsFullInfo, null, 2));

            //console.log('home is_current!!', postsFullInfoMap[item.item.post.id].post.title, postsFullInfoMap[item.item.post.id].is_current);
            /* const cell = this.cellRefs[item.key];
            if (cell) {
              if (item.isViewable) {
                cell.play();
              } else {
                cell.pause();
              }
            } */
        });
    });

    async function addUserPostLike(postFullInfoToUpdate) {
        try {
            console.log(' addUserPostLike triggered');
            const newUserPostLike = await DataStore.save(
                new UserPostLike({
                    post: postFullInfoToUpdate.post,
                    user: currentLoggedInUser,
                })
            );

            postFullInfoToUpdate.user_post_like_obj = newUserPostLike;
            postFullInfoToUpdate.user_post_like_changed = false;

        } catch (error) {
            console.log('Error updateUserPostLike', error);
        }
    }

    async function deleteUserPostLike(postFullInfoToDelete) {
        try {
            console.log(' deleteUserPostLike triggered');
            await DataStore.delete(UserPostLike, upl => upl.id.eq(postFullInfoToDelete.user_post_like_obj.id));
            postFullInfoToDelete.user_post_like_obj = null;
            postFullInfoToDelete.user_post_like_changed = false;
        } catch (error) {
            console.log('Error deleteUserPostLike', error);
        }
    }

    return (
        //<SafeAreaView>
        // <GestureHandlerRootView>
        <>
            <View style={{backgroundColor:"#FFEFE0"}}>
                {postsFullInfo && currentLoggedInUser && <FlatList
                    data={postsFullInfo}
                    renderItem={({ item, index }) => {

                        var post_type = "PLOG"
                        if(index%2==0){
                            post_type="VLOG";
                        }
                        else{
                            post_type="PLOG";
                        }


                        // if (item.post.post_type === "VLOG") {
                        if (post_type === "VLOG") {
                            return (
                                <VideoPost
                                    postFullInfo={item}
                                />
                            );
                        }
                        else {
                            return (<Plog postFullInfo={item} />);
                        }
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    snapToAlignment={"start"}
                    decelerationRate={"fast"}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                    removeClippedSubviews={true}
                    initialNumToRender={1}
                    maxToRenderPerBatch={1}
                    onEndReachedThreshold={0.7}
                    onEndReached={()=>setCurrentPage(currentPage+1)}
                    /* onRefresh={()=>{
                        setCurrentPage(currentPage+1);
                        setRefreshing(true);
                    }} */
                    /* refreshing={refreshing} */
                    getItemLayout={(_data, index) => ({
                        length: width,
                        offset: width * index,
                        index,
                    })}
                />}
            </View>
        </>
        // </GestureHandlerRootView>
        //</SafeAreaView>
    )
}

export default Home;