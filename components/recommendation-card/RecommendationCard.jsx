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
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
//import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

import posts from "../../data/posts";

const RecommendationCard = ({ businessId }) => {
  const [business, setBusiness] = useState();
  const [index, setIndex] = React.useState(0);

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
      const businesses = await DataStore.query(Business, (p) =>
        p.id.eq(businessId)
      );
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

  const handleIndex = (index) => {
    setIndex(index);
  };

  return (
    <>
      {business && (
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            marginHorizontal: 0,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: 5,

            borderRadius: 10, // Rounded corners for the card
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.0,
            //shadowOpacity: 0.15,
            //shadowRadius: 2.62,
            elevation: 4, // Elevation for Android
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
                  width: 36,
                  height: 36,
                  borderRadius: 36,
                  borderWidth: 0,
                  objectFit:"contain"
                }}
                source={{
                  //uri: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000&t=st=1691543833~exp=1691544433~hmac=14e1c8ed9899ccf1f84b97c1bea9c3d6b78034cafaee59c69ae90c7dcbd92ca2",
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
                <Text
                  style={{ fontSize: 16, fontFamily: "Montserrat-Regular" }}
                >
                  {business.name}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Montserrat-Regular",
                    color: businessId=="1dc8afdc-7776-474d-9b35-29bc91a1f6ca" ? "orange" : "green",
                    marginRight: 5,
                  }}
                >
                  {businessId=="1dc8afdc-7776-474d-9b35-29bc91a1f6ca" ? "Opens soon" : "Open"}
                </Text>
                <Text
                  style={{ fontSize: 12, fontFamily: "Montserrat-Regular" }}
                >
                  {businessId=="1dc8afdc-7776-474d-9b35-29bc91a1f6ca" ? "0.9 mi" : "0.5 mi"}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Carousel
                width={width * 0.8}
                height={width * 0.6}
                style={{ borderRadius: 10 }}
                autoPlay={false}
                data={business.profile_showcase_pics}
                scrollAnimationDuration={1000}
                onProgressChange={(_, absoluteProgress) => {
                  handleIndex(Math.round(absoluteProgress));
                }}
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
                        objectFit: "cover"
                      }}
                      source={{ uri: item }}
                      //style={styles.image}
                    />
                  </View>
                )}
              />

              <AnimatedDotsCarousel
                length={posts[1].images.length}
                currentIndex={index}
                maxIndicators={3}
                interpolateOpacityAndColor={false}
                activeIndicatorConfig={{
                  color: "black",
                  margin: 3,
                  opacity: 0.9,
                  size: 6,
                }}
                inactiveIndicatorConfig={{
                  color: "black",
                  margin: 3,
                  opacity: 0.2,
                  size: 6,
                }}
                decreasingDots={[
                  {
                    config: {
                      color: "black",
                      margin: 3,
                      opacity: 0.2,
                      size: 5,
                    },
                    quantity: 1,
                  },
                  {
                    config: {
                      color: "black",
                      margin: 3,
                      opacity: 0.2,
                      size: 4,
                    },
                    quantity: 1,
                  },
                ]}
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
            <Text style={{ fontSize: 14, fontFamily: "Montserrat-Regular" }}>
            {business.cuisine}
            </Text>
            <View
              style={{
                height: 10,
                width: 1,
                backgroundColor: "#bfbfbf",
                marginHorizontal: 5,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat-Regular",
                marginLeft: 5,
              }}
            >
              {
                getPriceLevelInDollarSigns(business.price_level)
              }
            </Text>
            <View
              style={{
                height: 10,
                width: 1,
                backgroundColor: "#bfbfbf",
                marginHorizontal: 5,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name={"favorite"} size={16} color={"#FF770F"} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Montserrat-Regular",
                  marginLeft: 2,
                }}
              >
                {business.rating}
              </Text>
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
              <MaterialIcons name={"access-time"} size={16} color={"black"} />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Montserrat-Regular",
                  marginLeft: 2,
                }}
              >
                {business.opening_hours!=null ? business.opening_hours[4].times[0] : "11 AM-9 PM"}
              </Text>
            </View>
          </View>
          {/* <View
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
              <Text style={{ fontSize: 16, fontFamily: "Montserrat-Regular" }}>
                176 N Canon Dr, Beverly Hills, CA 90210
              </Text>
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: 5,
              width: width * 0.8,
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: "Montserrat-Bold" }}>
              Why you will like it:
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat-Regular",
                marginTop: 5,
              }}
            >
              {business.website}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default RecommendationCard;
