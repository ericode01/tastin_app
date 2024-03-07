import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { BusinessInfoSection, BusinessProfileMenu } from "..";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Business } from "../../src/models";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { useRouter } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
//import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

import posts from "../../data/posts";

const BusinessCard = ({ businessId }) => {
  const [business, setBusiness] = useState();

  const router = useRouter();

  const width = Dimensions.get("window").width;

  useEffect(() => {
    if (businessId === undefined) {
      return;
    }

    fetchBusiness().then(setBusiness);
  }, []);

  async function fetchBusiness() {
    try {
      /* const businesses = await DataStore.query(Business, (p) => p.id.eq(businessId)); */
      var businesses = await DataStore.query(Business, (p) =>
        p.id.eq(businessId)
      );

      if (businesses == null || businesses.length == 0) {
        businesses = await DataStore.query(Business, (p) =>
          // p.id.eq("0b0de168-2bf8-4e9d-960e-1bf435a9d5b6")
          p.id.eq("0bcc14a8-e25e-4206-8fc0-d331c58e534f")
        );
      }

      console.log(
        "BusinessCard business retrieved successfully!",
        JSON.stringify(businesses, null, 2)
      );
      return businesses[0];
    } catch (error) {
      console.log("Error retrieving BusinessCard businesses", error);
      return null;
    }
  }

  function getPriceLevelInDollarSigns(priceLevel){
    var result = "";
    for(let i=0;i<priceLevel;i++){
      result+="$";
    }

    return result;
  }

  return (
    <>
      {business && (
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            margin: 5,
          }}
          onPress={() =>
            router.push({
              pathname: "pages/business_profile_page",
              params: { business_id: business.id },
            })
          }
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 0,
            }}
          >
            <View>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  borderWidth: 0,
                }}
                source={{
                 // uri: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000&t=st=1691543833~exp=1691544433~hmac=14e1c8ed9899ccf1f84b97c1bea9c3d6b78034cafaee59c69ae90c7dcbd92ca2",
                 uri: business.profile_pic,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                marginLeft: 10,
              }}
            >
              <View>
                <Text style={{ fontSize: 14 }}>{business.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12, color: "green", marginRight: 5 }}>
                  Open
                </Text>
                <Text style={{ fontSize: 12 }}>1.2 miles</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Carousel
                loop
                width={width*0.7*0.9}
                height={width*0.7 * 0.675}
                style={{ borderRadius: 10 }}
                autoPlay={false}
                data={business.profile_showcase_pics}
                scrollAnimationDuration={1000}
                //onSnapToItem={(index) => console.log("current index:", index)}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      style={{
                        flex: 1,
                        justifyContent: "center",
                      }}
                      source={{ uri: item }}
                      //style={styles.image}
                    />
                  </View>
                )}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 12 }}>{business.cuisine}</Text>
            <View
              style={{
                height: 10,
                width: 1,
                backgroundColor: "#bfbfbf",
                marginHorizontal: 5,
              }}
            />
            <Text style={{ fontSize: 12, marginLeft: 5 }}>{getPriceLevelInDollarSigns(business.price_level)}</Text>
            <View
              style={{
                height: 10,
                width: 1,
                backgroundColor: "#bfbfbf",
                marginHorizontal: 5,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name={"favorite"} size={12} color={"#FF770F"} />
              <Text style={{ fontSize: 12, marginLeft: 2 }}>{business.rating}</Text>
            </View>
            <View
              style={{
                height: 10,
                width: 1,
                backgroundColor: "#bfbfbf",
                marginHorizontal: 5,
              }}
            />
            <View style={{ flexDirection: "row", alignContent: "center" }}>
              <MaterialIcons name={"access-time"} size={12} color={"black"} />
              <Text style={{ fontSize: 12, marginLeft: 2 }}>11AM-10PM</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 2,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push({ pathname: "pages/map" })}
            >
              <Text style={{ fontSize: 12 }}>
              {business.address}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default BusinessCard;
