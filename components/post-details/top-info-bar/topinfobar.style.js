import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '13%',
        justifyContent: 'center',
        alignContent: 'center',
        //backgroundColor:'red',
        //borderBottomLeftRadius:'10%',
        //borderBottomRightRadius:'10%',
    },
    username: {
        color: 'black',
        fontSize: 16,
        //marginBottom: 5,
        fontFamily: 'Nunito_Sans_bold',
        marginLeft: 5,
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
        alignItems: 'center'
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
    },
    followButtonContainer: {
        width: 70,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    followButtonText: {
        color: 'black',
        fontFamily: 'Nunito_Sans_regular',
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