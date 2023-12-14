import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';



const PlogPic_backup = ({ images }) => {

    const isCarousel = React.useRef(null)
    const width = Dimensions.get('window').width;
    const [index, setIndex] = React.useState(0)

    return (
        <View style={{ width: "100%", height: Dimensions.get('window').height * 0.55, flexDirection: "column" }}>
            <View style={{ alignItems: "center" }}>
                <Carousel
                    layout="tinder"
                    layoutCardOffset={3}
                    ref={isCarousel}
                    data={images}
                    renderItem={({ item, index }) => (
                        <View style={styles.container} key={index}>
                            <Image
                                source={{ uri: item.imgUrl }}
                                style={styles.image}
                            />
                        </View>
                    )}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => setIndex(index)}
                />
            </View>

            <View style={{ 
                alignContent:"center", 
                alignItems: "center", 
                //transform:[{translateY:-25}]
                }}>
                <Pagination
                    dotsLength={images.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 5,
                        height: 5,
                        borderRadius: 5,
                        marginHorizontal: -15,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                    animatedDuration={50}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: Dimensions.get('window').width,
        //paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
})


/* export default PlogPic; */