import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Linking,
  Platform
} from "react-native";
import { UserProfile, BusinessCard } from "../../components";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import { User } from "../../src/models";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Stack } from "expo-router";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Button } from "react-native-ui-lib";

const Map = () => {
  const openSystemMap = () => {
    const lat = 34.0561640197085
    const lng = -118.3083035302915
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const label = "Custom Label";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Map",
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log(1);
              }}
            ></TouchableOpacity>
          ),
        }}
        getId={(params) => String(Date.now())}
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          showsCompass={true}
          showsScale={true}
          showsBuildings={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: 34.0561640197085,
            longitude: -118.3083035302915,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            key={1}
            coordinate={{
              latitude: 34.0561640197085,
              longitude: -118.3083035302915,
            }}
            title={"title"}
            description={"description"}
            onPress={() =>
              router.push({
                pathname: "pages/business_profile_page",
                params: {
                  business_id: "b067d4932-9c0f-4171-a0fb-d1ea3482351b",
                },
              })
            }
          >
            <BusinessCard businessId={"8461c6c7-ce05-4602-99de-161788869540"} />
            <Button onPress={openSystemMap}><Text>Direction</Text></Button>
          </Marker>
          
        </MapView>
      </View>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
