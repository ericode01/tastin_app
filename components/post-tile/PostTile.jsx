import React, { useState, useEffect} from "react";
import { Text, SafeAreaView, View, FlatList, Dimensions, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from 'expo-router';

const PostTile = ({ post }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        fetchUser().then(setUser);
      }, []);
    
      async function fetchUser() {
        try {
          const user = await post.user;
          console.log('PostTile user retrieved successfully!', JSON.stringify(user, null, 2));
          return user;
        } catch (error) {
          console.log('Error retrieving PostTile user', error);
          return null;
        }
      }

const showPost = ()=>{
router.push({ pathname: 'pages/vlog', params: { post_id: post.id}})
};

    return (
        user && <View style={{
            flex: 1,
            flexDirection: "column",
            marginHorizontal: 2,
            marginBottom: 5,
        }}>
            <TouchableOpacity onPress={showPost}>
                <Image
                    source={{ uri: post.cover_image_url }}
                    style={{
                        width: "100%",
                        height: 250,
                        alignSelf: "stretch"
                    }}
                    resizeMode="cover"
                />
                {post.post_type === "VLOG" &&
                    <MaterialCommunityIcons name="robot-happy" size={20} style={{ position: "absolute", top: 10, right: 10 }} />
                }
                <Text>
                    {post.title}
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                        source={{ uri: user.profile_picture_url }}
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#fff',
                        }}
                    />
                    <Text style={{ marginLeft: 5 }}>
                        {user.username}
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="robot-happy" size={20} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 5 }}>123</Text>
                </View>
            </View>
        </View>
    );
}

export default PostTile;