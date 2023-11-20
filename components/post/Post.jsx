import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PanGesture, PanGestureHandler } from "react-native-gesture-handler";
import PostDetails from "../post-details/PostDetails";
/* import {PinAlt, Star, Heart, BookmarkEmpty, Telegram} from 'iconoir-react-native'; */

import styles from "./post.style";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from "react-native-reanimated";

import { useRouter } from 'expo-router';


const Post = ({ postFullInfo, postMedia, setVideoPostYValue }) => {
    // const {post} = props;
    const video = React.useRef(null);
    const [playStatus, setPlayStatus] = useState({});

    const [isliked, setIsLiked] = useState(postFullInfo.user_post_like);
    const [userPostLikeCount, setUserPostLikeCount] = useState(postFullInfo.user_post_like_count);

    const y = useSharedValue(0);
    const x = useSharedValue(0);
    const { height } = useWindowDimensions();

    const router = useRouter();

    const onPlayPausePress = () => {
        if (playStatus.isPlaying) {
            video.current.pauseAsync();
        }
        else {
            video.current.playAsync();
        }
    }

    useEffect(() => {
        console.log('Post is_current!!', postFullInfo.post.title, JSON.stringify(postFullInfo.is_current, null, 2));

        if(postFullInfo.is_current){
            playVideo();
        }
        else{
            pauseVideo();
        }
    }, [postFullInfo.is_current])


    function playVideo() {
        if (!playStatus.isPlaying) {
            video.current.playAsync();
        }
    }

    function pauseVideo() {
        if (playStatus.isPlaying) {
            video.current.pauseAsync();
        }
    }

    const onLikePress = () => {
        postFullInfo.user_post_like_changed = !postFullInfo.user_post_like_changed;
        const likesToAdd = isliked ? -1 : 1;
        postFullInfo.user_post_like_count += likesToAdd;
        postFullInfo.user_post_like = !postFullInfo.user_post_like;
        setIsLiked(!isliked);
        setUserPostLikeCount(postFullInfo.user_post_like_count);
    }

    const onShowMorePress = () => {
        setVideoPostYValue(withTiming(-height, { easing: Easing.linear }));
    }

    const animatedContainerStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withTiming(y.value, { duration: 100, easing: Easing.linear }),

            }
        ]
    }));

    const unlockAnimatedHandler = useAnimatedGestureHandler({
        onStart: () => {
            console.log("On start");
        },
        onActive: (event) => {
            y.value = event.translationY;
            x.value = event.translationX;
        },
        onEnd: (event) => {
            console.log(height);
            if (y.value < -height / 2 || event.velocityY < -500) {
                // unlock
                y.value = withTiming(-height, { easing: Easing.linear });
            }
            else {
                // reset
                y.value = withTiming(0, { easing: Easing.linear });
            }
        },
    });

    const trimString = (s) => {
        var maxLength = 190; // maximum number of characters to extract

        //trim the string to the maximum length
        var trimmedString = s.substr(0, maxLength);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

        return trimmedString;
    };

    return (
        <View
            style={styles.container}
        >
            {/* <PanGestureHandler 
            onGestureEvent={unlockAnimatedHandler}
            activeOffsetY={[-5, 5]}
            >
                <Animated.View 
                style={{
                    postition:"absolute", 
                    width:"100%",
                    height:"100%",
                    //backgroundColor: "red",
                    top:0,
                    zIndex:-100
                    }}> */}

            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.videoPlayButton}>
                <View>
                    <Video
                        ref={video}
                        source={{
                            uri: postMedia.url
                        }}
                        /* source={require("../../assets/test_short_videos/1_1691178059.mp4")} */
                        // useNativeControls
                        resizeMode={ResizeMode.COVER}
                        isLooping={true}
                        onPlaybackStatusUpdate={status => setPlayStatus(() => status)}
                        //onLoad={() => video.current.playAsync()}
                        onLoad={() => {
                            if(postFullInfo.is_current){
                                video.current.playAsync()
                            }
                        }}
                        style={styles.video}
                        onError={(error) => console.log(error)}
                    />


                    <View style={styles.videoUiContainer}>
                        <View style={styles.videoUiRightContainer}>
                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name={'heart'} size={24} color={isliked ? 'red' : 'white'} />
                                {/* <Heart height={25} width={25} color={'white'} fill={isliked? '#ff8c1a' : null}/> */}
                                <Text style={styles.statsLabel}>{userPostLikeCount}</Text>
                            </ TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                {/* <MaterialIcons name={'bookmark'} size={25} color={'white'} /> */}
                                {/* <BookmarkEmpty height={25} width={25} color={'white'} /> */}
                                <Text style={styles.statsLabel}>{postFullInfo.bookmarks}</Text>
                            </ TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                {/* <MaterialIcons name={'share'} size={25} color={'white'} /> */}
                                {/*  <Telegram height={25} width={25} color={'white'} /> */}
                                <Text style={styles.statsLabel}>{postFullInfo.shares}</Text>
                            </ TouchableOpacity>
                        </View>

                        <View style={styles.videoUiBottomContainer}>
                            <View style={styles.userInfoContainer}>
                                <TouchableOpacity onPress={() => router.push({ pathname: 'pages/user_profile_page', params: { user_id: postFullInfo.user.id } })}>
                                    <View style={styles.userInfo}>
                                        <Image style={styles.profilePicture} source={{ uri: postFullInfo.user.profile_picture_url }} />
                                        <Text style={styles.username}>{postFullInfo.user.username}</Text>
                                    </View>
                                </ TouchableOpacity >
                                <TouchableOpacity style={styles.followButtonContainer}>
                                    <Text style={styles.followButtonText}>Follow</Text>
                                </ TouchableOpacity >
                            </View>
                            <View style={styles.restaurantInfoContainer}>
                                <TouchableOpacity onPress={() => router.push({ pathname: 'pages/business_profile_page', params: { business_id: postFullInfo.business.id } })}>
                                    <View style={styles.restaurantContainer}>
                                        {/* <MaterialIcons name={'place'} size={25} color={'white'} /> */}
                                        {/* <PinAlt height={25} width={25} color={'white'}/> */}
                                        <Text style={styles.restaurantName}>{postFullInfo.business.name}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.restaurantStarContainer}>
                                    {/* <MaterialIcons name={'star'} size={25} color={'white'} /> */}
                                    {/* <Star height={25} width={25} color={'white'}/> */}
                                    <Text>restaurant star</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.description}>{trimString(postFullInfo.post.description)} ...</Text>
                            <TouchableOpacity style={{ alignSelf: "flex-start" }} onPress={onShowMorePress}>
                                <Text style={styles.description}>Show More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* </Animated.View >
            </PanGestureHandler> */}


        </View>
    )
}

export default Post;