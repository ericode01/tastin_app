import React, { useState } from "react";
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


const Post = (props) => {
    // const {post} = props;
    const video = React.useRef(null);
    const [playStatus, setPlayStatus] = useState({});

    const [post, setPost] = useState(props.post);
    const [user, setUser] = useState(props.user);
    const [business, setBusiness] = useState(props.business);
    const [postMedia, setPostMedia] = useState(props.postMedia);

    const [isliked, setIsLiked] = useState(false);

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

    const onLikePress = () => {
        const likesToAdd = isliked ? -1 : 1;
        setPost(
            {
                ...post,
                likes: post.likes + likesToAdd,
            }
        );
        setIsLiked(!isliked);
    }

    const onShowMorePress = () => {
        props.setVideoPostYValue(withTiming(-height, { easing: Easing.linear }));
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
                        onLoad={() => video.current.playAsync()}
                        style={styles.video}
                        onError={(error) => console.log(error)}
                    />


                    <View style={styles.videoUiContainer}>
                        <View style={styles.videoUiRightContainer}>
                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                {/* <AntDesign name={'heart'} size={24} color={isliked ? 'red' : 'white'} /> */}
                                {/* <Heart height={25} width={25} color={'white'} fill={isliked? '#ff8c1a' : null}/> */}
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </ TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                {/* <MaterialIcons name={'bookmark'} size={25} color={'white'} /> */}
                                {/* <BookmarkEmpty height={25} width={25} color={'white'} /> */}
                                <Text style={styles.statsLabel}>{post.bookmarks}</Text>
                            </ TouchableOpacity>
                            <TouchableOpacity style={styles.iconContainer}>
                                {/* <MaterialIcons name={'share'} size={25} color={'white'} /> */}
                               {/*  <Telegram height={25} width={25} color={'white'} /> */}
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </ TouchableOpacity>
                        </View>

                        <View style={styles.videoUiBottomContainer}>
                            <View style={styles.userInfoContainer}>
                                <TouchableOpacity onPress={() => router.push({ pathname: 'pages/user_profile_page', params: { user_id: user.id}})}>
                                    <View style={styles.userInfo}>
                                        <Image style={styles.profilePicture} source={{ uri: user.profile_picture_url }} />
                                        <Text style={styles.username}>{user.username}</Text>
                                    </View>
                                </ TouchableOpacity >
                                <TouchableOpacity style={styles.followButtonContainer}>
                                    <Text style={styles.followButtonText}>Follow</Text>
                                </ TouchableOpacity >
                            </View>
                            <View style={styles.restaurantInfoContainer}>
                                <TouchableOpacity onPress={() => router.push({ pathname: 'pages/business_profile_page', params: { business_id: business.id}})}>
                                    <View style={styles.restaurantContainer}>
                                        {/* <MaterialIcons name={'place'} size={25} color={'white'} /> */}
                                        {/* <PinAlt height={25} width={25} color={'white'}/> */}
                                        <Text style={styles.restaurantName}>{business.name}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.restaurantStarContainer}>
                                    {/* <MaterialIcons name={'star'} size={25} color={'white'} /> */}
                                    {/* <Star height={25} width={25} color={'white'}/> */}
                                    <Text>restaurant star</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.description}>{trimString(post.description)} ...</Text>
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