import React from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
/* import {PinAlt, Star, Heart, BookmarkEmpty, Telegram} from 'iconoir-react-native'; */

import styles from "./topinfobar.style";
import posts from '../../../data/posts';

const TopInfoBar = ({post, business, user}) => {

    //const post = posts[0];

    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <TouchableOpacity >
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
                <TouchableOpacity >
                    <View style={styles.restaurantContainer}>
                        {/* <MaterialIcons name={'place'} size={25} color={'black'} /> */}
                        {/* <PinAlt height={25} width={25} color={'black'}/> */}
                        <Text style={styles.restaurantName}>{business.name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restaurantStarContainer}>
                    {/* <MaterialIcons name={'star'} size={25} color={'black'} /> */}
                    {/* <Star height={25} width={25} color={'black'}/> */}
                    <Text>restaurant star</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TopInfoBar;