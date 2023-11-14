import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge } from 'react-native-ui-lib';
import { useContext } from 'react';
import { CurrentLoggedInUserContext } from '../../../contexts/CurrentLoggedInUserContext';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

const UserInfoSection = ({ userInfo }) => {
    const currentLoggedInUser = useContext(CurrentLoggedInUserContext);
    const { signOut } = useAuthenticator();

    return (
        <View style={{ flexDirection: "column", justifyContent: "flex-start", marginHorizontal: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: '#fff',
                        }}
                        //source={{ uri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/barbie-movie-margot-robbie.png?resize=1024,576" }}
                        source={{ uri: userInfo.profile_picture_url }}
                    />
                    {
                        userInfo.id === currentLoggedInUser.id ?
                            <Badge
                                label={'Sign out'}
                                size={16}
                                style={{ position: "absolute", top: 5, right: -18 }}
                                onPress={signOut}
                                backgroundColor="#ff8c1a"
                                labelStyle={{ color: "white" }}
                                borderWidth="2"
                                borderColor="white"
                            />
                            :
                            <Badge
                                label={'Follow'}
                                size={16}
                                style={{ position: "absolute", top: 5, right: -18 }}
                                onPress={() => { console.log("badge pressed") }}
                                backgroundColor="#ff8c1a"
                                labelStyle={{ color: "white" }}
                                borderWidth="2"
                                borderColor="white"
                            />
                    }
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Text>30</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Text>40</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Text>50</Text>
                    <Text>Following</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Text>50</Text>
                    <Text>Save & Likes</Text>
                </View>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text>{userInfo.username}</Text>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text>{userInfo.description}</Text>
            </View>
        </View>
    );
}

export default UserInfoSection;