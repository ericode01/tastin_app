import React, { useState, useEffect } from 'react';
import { View, Text, useWindowDimensions, StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styles from "./videopost.style";
import { Post, PostDetails, CommentInputBar } from '..';
import { useRouter } from 'expo-router';
import { PostMedia } from '../../src/models';
import { DataStore } from 'aws-amplify';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from "react-native-reanimated";


const VideoPost = (props) => {
    const [post, setPost] = useState(props.post);
    const [user, setUser] = useState(props.user);
    const [business, setBusiness] = useState(props.business);
    const [postMedia, setPostMedia] = useState();

    useEffect(() => {
        fetchPostMedia().then(setPostMedia);
    }, [])

    async function fetchPostMedia(){
        try {
          //const postMediaArr = await post.post_media.toArray();
          const postMediaArr = await DataStore.query(PostMedia, pm => pm.post.id.eq(post.id));
          console.log('PostMedia retrieved successfully!', JSON.stringify(postMediaArr, null, 2));
          return postMediaArr[0];
        } catch (error) {
          console.log('Error retrieving PostMedia', error);
          return null;
        }
      }

    console.log("videopost", user)

    const { height } = useWindowDimensions();
    const y = useSharedValue(0);

    const setVideoPostYValue = (newValue) => {
        y.value = newValue;
    }

    const animatedContainerStyle = useAnimatedStyle(() => {
        /* if (y.value < 500 && y.value > -500) {
            return ({
                transform: [
                    {
                        translateY: withTiming(y.value, {
                            //duration: 10,
                            easing: Easing.bezier(.15, .78, .83, .67),
                        }),
                    },
                ],
            });
        }

        return ({
            transform: [
                {
                    translateY: 0,
                },
            ],
        }); */
        /* console.log(y.value);
        console.log(`height ${height}`) */
        const value = withTiming(y.value, {
            //duration: 10,
            easing: Easing.bezier(.15, .78, .83, .67),
        });
        /* console.log(`withtime ${value}`) */

        return ({
            transform: [
                {
                    translateY: withTiming(Math.max(Math.min(y.value, 0), -height), {
                        //duration: 10,
                        easing: Easing.bezier(.15, .78, .64, .93),
                    }),
                },
            ],
        });

        /* return ({
            transform: [
                {
                    translateY: withTiming(y.value, {
                        //duration: 10,
                        easing: Easing.bezier(.15, .78, .83, .67),
                    }),
                },
            ],
        }); */
    });

    const unlockGestureHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            if (event.translationY < 0) {
                y.value = event.translationY;
            }
            console.log("onActive");
        },
        onEnd: (event) => {
            /* console.log(event); */
            if (event.velocityY < -500) {
                // unlock
                console.log("unlock1");
                y.value = withTiming(-height, { easing: Easing.linear });
            } /* else if (event.velocityY > 500) {
                // reset
                console.log("reset1");
                y.value = withTiming(height, { easing: Easing.linear });
            } */ else if (-y.value > height / 2) {
                // unlock
                console.log("unlock2");
                y.value = withTiming(-height, { easing: Easing.linear });
            } else {
                // reset
                console.log("reset2");
                y.value = withTiming(0, { easing: Easing.linear });
            }
        },
    });

    const lockGestureHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            if (event.translationY > 0) {
                y.value = event.translationY;
            }
            console.log("onActive");
        },
        onEnd: (event) => {
            console.log(event);
            if (event.velocityY > 500) {
                // lock
                console.log("lock-lock1");
                y.value = withTiming(0, { easing: Easing.linear });
            } /* else if (event.velocityY > 500) {
                // reset
                console.log("reset1");
                y.value = withTiming(height, { easing: Easing.linear });
            } */ else if (y.value > height / 2) {
                // unlock
                console.log("lock-lock2");
                y.value = withTiming(0, { easing: Easing.linear });
            } else {
                // reset
                console.log("lock-reset2");
                y.value = withTiming(-height, { easing: Easing.linear });
            }
        },
    });


    return (
        <View style={{ width: Dimensions.get("screen").width }}>
            <View style={{ width: "100%", height: "100%", zIndex: 1 }}>


                <PanGestureHandler
                    onGestureEvent={lockGestureHandler}
                    activeOffsetY={[-5, 5]}
                >
                    <Animated.View
                        style={{
                            width: "100%",
                            height: "18%",
                            //backgroundColor: "black",
                            position: "absolute",
                            top: 0,
                            left: 0,

                            //alignSelf:"flex-start"
                            zIndex: 0,
                            /* transform: [
                                {
                                    translateY: 100,
                                },
                            ], */
                        }} >
                        <View style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: "100%",
                            height: Dimensions.get("window").height * 0.945,

                            //backgroundColor: 'red'

                        }}>
                            <PostDetails post={post} business={business} user={user}/>
                        </View>
                    </Animated.View>
                </PanGestureHandler>

            </View>

            {/* <Post post={post} /> */}
            < Animated.View style={[styles.container, animatedContainerStyle]}>


                <PanGestureHandler
                    onGestureEvent={unlockGestureHandler}
                    activeOffsetY={[-5, 5]}
                >
                    <Animated.View
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            //zIndex: -100,
                            /* transform: [
                                {
                                    translateY: 100,
                                },
                            ], */
                        }} >
                        {postMedia && <Post post={post} user={user} business={business} postMedia={postMedia} setVideoPostYValue={setVideoPostYValue} />}
                    </Animated.View>
                </PanGestureHandler>



            </Animated.View>


        </View>
    );
};

export default VideoPost;