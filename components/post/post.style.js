import { StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    video:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    },
    videoPlayButton:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        zIndex:100,
    },
    container: {
        width:'100%',
        //width:Dimensions.get('screen').width,
        //position:"absolute",
        //height:Dimensions.get('screen').height,
        height:'100%',
    },
    videoUiContainer:{
        height:'100%',
        justifyContent:'flex-end',
        opacity: 0.8,
    },
    username:{
        color:'#fff',
        fontSize:16,
        //marginBottom: 5
        marginLeft: 5,
        ffontFamily: 'Montserrat-Regular',
    },
    description:{
        color:'#fff',
        fontSize:15,
        fontFamily: 'Montserrat-Regular',
    },
    videoUiBottomContainer: {
        marginHorizontal:15,
        marginBottom: 10,
        alignItems:'flex-start',
    },
    restaurantContainer:{
        //marginBottom: 5,
        flexDirection:'row',
        alignItems:'center'
    },
    restaurantName:{
        color:'#fff',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginLeft:3,
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center'
    },
    profilePicture:{
        width:50,
        height:50,
        borderRadius: 25,
        borderWidth:2,
        borderColor:'#fff',
    },
    userInfoContainer: {
        flexDirection:'row',
        alignItems:'center'
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
    followButtonText:{
        color:'black',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
    },
    restaurantInfoContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
    },
    restaurantStarContainer :{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 10,
    },

    // right container
    videoUiRightContainer:{
        alignSelf:'flex-end',
        height: 180,
        justifyContent:'space-between',
        marginRight:15,
    },
    statsLabel: {
        color: '#fff',
        fontSize:16,
        fontWeight:'600',
        marginTop:5,
        fontFamily: 'Nunito_Sans_regular',
    },
    iconContainer:{
        alignItems:'center',
    }

});

export default styles;