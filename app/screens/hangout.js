import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { UserProfile } from "../../components";

const Hangout = () => {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
            <UserProfile />
        </ SafeAreaView>
    );
}

export default Hangout;