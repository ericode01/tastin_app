import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from 'react-native';
import { BusinessProfile } from "../../components";
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import { Business } from '../../src/models';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { TouchableOpacity } from "react-native-gesture-handler";

const BusinessProfilePage = () => {
  const [profileBusiness, setProfileBusiness] = useState();
  const params = useLocalSearchParams();

  useEffect(() => {
    fetchBusiness().then(setProfileBusiness);
  }, []);

  async function fetchBusiness() {
    try {
      const businesses = await DataStore.query(Business, (p) => p.id.eq(params.business_id));
      console.log('BusinessProfilePage business retrieved successfully!', JSON.stringify(businesses, null, 2));
      return businesses[0];
    } catch (error) {
      console.log('Error retrieving BusinessProfilePage businesses', error);
      return null;
    }
  }


  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Business",
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
          headerRight: () => (<TouchableOpacity onPress={ ()=> {console.log(1)} }></TouchableOpacity>),
        }}
        getId={(params) => String(Date.now())}
      />
      <SafeAreaView style={{ flex:1, backgroundColor:"white" }}>
          { profileBusiness && <BusinessProfile business={profileBusiness}/> }
        </ SafeAreaView>
    </>
  );
}

export default BusinessProfilePage;