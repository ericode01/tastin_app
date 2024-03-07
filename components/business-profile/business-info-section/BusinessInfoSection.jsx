import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge, Button } from "react-native-ui-lib";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "react-native-ui-lib";
import Carousel from "react-native-reanimated-carousel";
import {
  Star,
  Heart,
  MapPin,
  PenSquare,
  Phone,
  MessageCircle,
  Clock4,
  Route,
} from "lucide-react-native";

import posts from "../../../data/posts";

const BusinessInfoSection = ({ business }) => {
  function getPriceLevelInDollarSigns(priceLevel) {
    var result = "";
    for (let i = 0; i < priceLevel; i++) {
      result += "$";
    }

    return result;
  }

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        //marginHorizontal: 10,
        backgroundColor: "rgba(255, 255, 255, 0.9)",

        //backgroundColor: '#fff', // Card background color
        borderRadius: 10, // Rounded corners for the card
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.62,
        elevation: 4, // Elevation for Android
        marginHorizontal: 15, // Center the card horizontally

        zIndex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          paddingHorizontal: 5,
        }}
      >
        <View>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
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
            <Text style={{ fontSize: 20, fontFamily: "Montserrat-Regular" }}>
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
                color: "green",
                marginRight: 5,
                fontFamily: "Montserrat-Regular",
              }}
            >
              Open
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Route size={12} color={"black"} strokeWidth={2} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Montserrat-Regular",
                  marginLeft: 1,
                }}
              >
                1.2 miles
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ marginRight: 10 }}>
            {/* <MaterialIcons name={"star"} size={20} color={"black"} /> */}
            <Star size={24} color={"#ff770f"} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Carousel
          loop
          width={Dimensions.get("window").width * 0.9}
          height={Dimensions.get("window").width * 0.675}
          style={{ borderRadius: 10 }}
          autoPlay={true}
          //data={posts[1].images}
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

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          paddingHorizontal: 5,
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Regular" }}>
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
        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Regular" }}>
          {getPriceLevelInDollarSigns(business.price_level)}
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
          <Heart size={12} color={"#ff770f"} strokeWidth={2} fill="#ff770f" />
          <Text
            style={{
              fontSize: 12,
              marginLeft: 2,
              fontFamily: "Montserrat-Regular",
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
        <TouchableOpacity
          style={{ flexDirection: "row", alignContent: "center" }}
        >
          <Clock4 size={12} color={"black"} strokeWidth={2} />
          <Text
            style={{
              fontSize: 12,
              marginLeft: 3,
              fontFamily: "Montserrat-Regular",
            }}
          >
            {business.opening_hours!=null ? business.opening_hours[4].times : "11 AM-9 PM"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <MapPin size={12} color={"black"} strokeWidth={2} />
        <Text style={{ fontSize: 12, fontFamily: "Montserrat-Regular" }}>
          {business.address}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          height: 1,
          width: Dimensions.get("window").width * 0.9,
          backgroundColor: "#bfbfbf",
          marginTop: 5,
          alignSelf: "center",
        }}
      />

      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <Button
          label={"Reserve"}
          size={Button.sizes.xSmall}
          backgroundColor="#ff770f"
          //backgroundColor="#f6ba4a"
          color={Colors.white}
          style={{ width: "32.5%", borderRadius: 15 }}
          labelStyle={{ fontFamily: "Montserrat-Regular", marginLeft: 5 }}
          iconSource={() => (
            <PenSquare size={12} color={"white"} strokeWidth={2} />
          )}
        />
        <Button
          label={"Call"}
          size={Button.sizes.xSmall}
          backgroundColor="#ff770f"
          //backgroundColor="#f6ba4a"
          color={Colors.white}
          style={{ width: "32.5%", borderRadius: 15 }}
          labelStyle={{ fontFamily: "Montserrat-Regular", marginLeft: 5 }}
          iconSource={() => <Phone size={12} color={"white"} strokeWidth={2} />}
        />
        <Button
          label={"Message"}
          size={Button.sizes.xSmall}
          backgroundColor="#ff770f"
          //backgroundColor="#f6ba4a"
          color={Colors.white}
          style={{ width: "32.5%", borderRadius: 15 }}
          labelStyle={{ fontFamily: "Montserrat-Regular", marginLeft: 5 }}
          iconSource={() => (
            <MessageCircle size={12} color={"white"} strokeWidth={2} />
          )}
        />
      </View>
    </View>
  );
};

export default BusinessInfoSection;
