import React from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Badge, Button } from 'react-native-ui-lib';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native-ui-lib';

const BusinessInfoSection = ({business}) => {
    return (
        <View style={{ flexDirection: "column", justifyContent: "flex-start", marginHorizontal: 10 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                    style={{
                        width: Dimensions.get("screen").width * 0.95,
                        height: 130,
                        borderRadius: 30,
                        borderWidth: 0,
                    }}
                    source={{ uri: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000&t=st=1691543833~exp=1691544433~hmac=14e1c8ed9899ccf1f84b97c1bea9c3d6b78034cafaee59c69ae90c7dcbd92ca2" }}
                />
                <View style={{ position: "absolute", top: 0, right: 10 }}>
                    <TouchableOpacity >
                        <MaterialIcons name={'star'} size={30} color={'white'} />
                    </TouchableOpacity>
                </View>
                <Badge
                    label={'143 Stared'}
                    size={16}
                    style={{ position: "absolute", bottom: 0, right: 0 }}
                    onPress={() => { console.log("badge pressed") }}
                    backgroundColor="#ff770f"
                    labelStyle={{ color: "white" }}
                    borderWidth="2"
                    borderColor="white"
                />
                <View style={{
                    padding: 3,
                    borderRadius: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    position: "absolute",
                    bottom: "35%"
                }}>
                    <Text style={{ fontSize: 25, color: 'rgba(0, 0, 0, 1)', textAlign: "center" }}>{business.name}</Text>
                </View>
            </View>
            <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                <Text>New American</Text>
                <Text>$$$</Text>
                <View style={{ flexDirection: "row" }}>
                    <MaterialIcons name={'star'} size={15} color={'black'} />
                    <Text>4.2</Text>
                </View>
                <Text>1.2 miles</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                <Text>Open</Text>
                <TouchableOpacity >
                    <Text>Show Hours</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                <Text>Address</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Button label={'Reserve'} size={Button.sizes.xSmall}  backgroundColor="#ff770f" color={Colors.white} style={{width:"32.5%", borderRadius: 5}} />
                <Button label={'Call'} size={Button.sizes.xSmall}  backgroundColor="#ff770f" color={Colors.white} style={{width:"32.5%", borderRadius: 5}}/>
                <Button label={'Message'} size={Button.sizes.xSmall}  backgroundColor="#ff770f" color={Colors.white} style={{width:"32.5%", borderRadius: 5}}/>
            </View>
        </View>
    );
}

export default BusinessInfoSection;