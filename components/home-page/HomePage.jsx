import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions } from "react-native";
import { UserInfoSection, UserProfileMenu, RecommendationCard } from "..";
import { ScrollView } from "react-native-gesture-handler";

const HomePage = ({ userInfo }) => {
  var businessesSet1 = [{ id: "427f619d-a400-43f6-a8f4-30a62927de6d" }, { id: "eb5d1703-1069-47ce-b11f-62bf80e00a37" }, { id: "7969c04a-fdca-4449-b458-3927f860d706" }];
  var businessesSet2 = [{ id: "43bccea3-7570-4eb2-9f49-d0e3291692c6" }, { id: "1f148483-8ed5-4af7-9027-de5693db7d0b" }, { id: "eb4b5d8c-9d09-4dd3-8da3-f93cc5f8829f" }];
  var businessesSet3 = [{ id: "0bcc14a8-e25e-4206-8fc0-d331c58e534f" }, { id: "1dc8afdc-7776-474d-9b35-29bc91a1f6ca" }, { id: "4eb3b122-35b8-4374-85e4-6f537b983ff8" }];

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ fontSize: 26, fontFamily: "Montserrat-Medium" }}>
          Good morning! ☀️
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Montserrat-Medium",
            marginHorizontal: 15,
            marginBottom: 13,
          }}
        >
          Delightful Lunch Picks for You
        </Text>
        <FlatList
          style={{ paddingBottom: 5 }}
          data={businessesSet1}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                minHeight: 20,
                alignItems: "center",
                marginHorizontal: 15,
              }}
            >
              <RecommendationCard
                businessId={item.id}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Montserrat-Medium",
            marginHorizontal: 15,
            marginBottom: 13,
          }}
        >
          Relaxing Afternoon Coffee/Tea Break
        </Text>
        <FlatList
          style={{ paddingBottom: 5 }}
          data={businessesSet2}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                minHeight: 20,
                alignItems: "center",
                marginHorizontal: 15,
              }}
            >
              <RecommendationCard
                businessId={item.id}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ marginTop: 25 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Montserrat-Medium",
            marginHorizontal: 10,
            marginBottom: 8,
          }}
        >
          Gourmet Dinner Places
        </Text>
        <FlatList
          style={{ paddingBottom: 5 }}
          data={businessesSet3}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                minHeight: 20,
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <RecommendationCard
                businessId={item.id}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HomePage;
