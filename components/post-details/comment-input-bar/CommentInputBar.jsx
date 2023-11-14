import React from "react";
import { Assets, Colors, Spacings, View, Text, Button, Keyboard, TextField, TextFieldRef, Card } from 'react-native-ui-lib';
import { StyleSheet, ScrollView, ActivityIndicator, KeyboardAvoidingView, Dimensions } from 'react-native';
const { KeyboardAwareInsetsView } = Keyboard;
/* import { Send, LightBulbOn,  BubbleSearch, Plus, EmojiTalkingHappy, User, EmojiSatisfied } from 'iconoir-react-native'; */

const CommentInputBar = () => {
    return (
        <View
            //behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.inner}>
                <TextField
                    //label="Description"
                    placeholder="Say something?"
                    floatOnFocus={true}
                    multiline
                    // showCharCounter
                    numberOfLines={5}
                    /* bottomAccessory={
                        <Text text100>
                            {Assets.emojis.grapes} {Assets.emojis.melon} {Assets.emojis.banana}
                        </Text>
                    } */
                    charCounterStyle={{ color: Colors.$textGeneral }}
                    maxLength={100}
                    fieldStyle={styles.withFrame}
                    containerStyle={{
                        flex: 1,
                        marginRight: 5,
                    }}
                />
                <Button
                    size={Button.sizes.xSmall}
                    round={true}
                    backgroundColor={Colors.orange40}
                    style={{ height: 30, width: 30 }}
                    /* iconSource={() => <Send height={20} width={20} color={"white"} />} */
                />
                <Button
                    size={Button.sizes.xSmall}
                    round={true}
                    backgroundColor={Colors.orange40}
                    style={{ height: 30, width: 30, marginLeft: 5}}
                    /* iconSource={() => <LightBulbOn height={20} width={20} color={"white"} />} */
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical:5,
        shadowColor: "white",
        //zIndex:1,
        alignItems: "center",
/*         position: "absolute",
        bottom:0,
        left:0,
        right:0 */
    },
    inner: {
        paddingHorizontal: 15,
        flexDirection: "row",
        //backgroundColor: "red",
    },
    /* header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    }, */
    withFrame: {
        borderWidth: 1,
        borderColor: Colors.$outlineDisabledHeavy,
        padding: 4,
        borderRadius: 20,
        height: 30,
        //backgroundColor: "red"
    },
});

export default CommentInputBar;