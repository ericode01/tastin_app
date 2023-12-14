import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        //height: '13%',
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection:'column',
        marginTop:0,
        marginBottom:10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        
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
        //marginVertical: 0, // Margin at the top and bottom
        //backgroundColor:'red',
        //borderBottomLeftRadius:'10%',
        //borderBottomRightRadius:'10%',
    },
    username: {
        color: 'black',
        fontSize: 16,
        //marginBottom: 5,
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
    },
    restaurantContainer: {
        //marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    restaurantName: {
        color: 'black',
        fontFamily: 'Nunito_Sans_regular',
        marginLeft: 2,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginVertical:5,
        justifyContent:"space-between"
    },
    followButtonContainer: {
        width: 70,
        height: 20,
        backgroundColor: '#FF770F',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 25,
    },
    followButtonText: {
        color: '#fff',
        fontFamily: 'Montserrat-Regular',
    },
    restaurantInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginVertical: 5
    },
    restaurantStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },

});

export default styles;