import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { BusinessProfile } from "../../components";

const Explore = () => {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
            <BusinessProfile business={business}/>
        </ SafeAreaView>
    );
}

export default Explore;