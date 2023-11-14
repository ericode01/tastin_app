import React from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from "./description.style";
import posts from '../../../data/posts';
import { ScrollView } from "react-native-gesture-handler";

const Description = ({post}) => {

    //const post = posts[0];

    return (
        <View style={{ marginHorizontal: 15 }}>
            <Text style={{ fontFamily: 'Nunito_Sans_bold', fontSize: 20, marginBottom: 5 }}>{post.title}</Text>
            <Text style={{ fontFamily: 'Nunito_Sans_regular', fontSize: 16 }}>{post.description}</Text>
{/*             <Text style={{ fontFamily: 'Nunito_Sans_regular', fontSize: 16 }}>{post.description}</Text>
            <Text style={{ fontFamily: 'Nunito_Sans_regular', fontSize: 16 }}>{post.description}</Text> */}

            <View style={{ marginTop: 5, marginBottom: 10, opacity: 0.5 }}>
                <Text style={{fontFamily: 'Nunito_Sans_regular', fontSize: 14 }}>{post.createdAt}</Text>
            </View>
        </View>
    );
};

export default Description;