import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { UserInfoSection, UserProfileMenu } from '..';

const UserProfile = ({userInfo}) => {
    return (
        <View style={{flex:1}}>
            <UserInfoSection userInfo={userInfo}/>
            <UserProfileMenu userInfo={userInfo}/>
        </View>
    );
}

export default UserProfile;