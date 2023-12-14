import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { UserProfile } from "../../components";
import Chats from "../../components/chat/Chats"

const Hangout = () => {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
            <Chats />
        </ SafeAreaView>
    );
}

export default Hangout;