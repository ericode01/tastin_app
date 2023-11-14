import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { BusinessInfoSection, BusinessProfileMenu } from '..';

const BusinessProfile = ({business}) => {
    return (
        <View style={{ flex: "1" }}>
            <BusinessInfoSection business={business}/>
            <BusinessProfileMenu business={business}/>
        </View>
    );
}

export default BusinessProfile;