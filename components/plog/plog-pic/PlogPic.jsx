import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import AnimatedDotsCarousel from "react-native-animated-dots-carousel";

const PlogPic = ({ images, postFullInfo }) => {
  const screenWidth = Dimensions.get("window").width;
  const [index, setIndex] = React.useState(0);
  const picRatioFactor = 4 / 3;
  const carouselHeight = screenWidth * picRatioFactor;

  const handleIndex = (index) => {
    setIndex(index);
  };

  return (
    <>
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 0 }}
      >
        <View style={{marginBottom:5}}>
          <Carousel
            loop={true}
            width={screenWidth}
            height={carouselHeight}
            style={{ borderRadius: 0 }}
            autoPlay={postFullInfo.is_current}
            data={images}
            scrollAnimationDuration={1000}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            //onSnapToItem={(index) => console.log("current index:", index)}
            onProgressChange={(_, absoluteProgress) => {
              handleIndex(Math.round(absoluteProgress));
            }}
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
                  source={{ uri: item.imgUrl }}
                />
              </View>
            )}
          />
        </View>

        <AnimatedDotsCarousel
          length={images.length}
          currentIndex={index}
          maxIndicators={5}
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
              config: { color: "black", margin: 3, opacity: 0.2, size: 5 },
              quantity: 1,
            },
            {
              config: { color: "black", margin: 3, opacity: 0.2, size: 4 },
              quantity: 1,
            },
          ]}
        />
      </View>
    </>
  );
};

export default PlogPic;
