import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
    const [userId, setUserId] = useState('');
    const [errorText, setErrorText] = useState('');

    return(
        <View style={Styles.container}>
            <TextInput
                style={Styles.inputContainer}
                placeholder={'학번 입력'}
                onChangeText={(userId) => setUserId(userId)}
                autoCapitalize="none"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={true}
            />
            <View style={Styles.buttonAndTextContainer}>
                    <Button style={Styles.buttonS} color={"#888"} title={"로그인"}
                        onPress={() => {
                            fetch("http://www.classnotificator.kro.kr:8888/login?id=" + userId)
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    console.log(responseJson);
                                    if(responseJson.res === "No exist") {
                                        setErrorText("존재하지 않는 유저");
                                        console.log("failed to login")
                                    }
                                    else {
                                        AsyncStorage.setItem('StudentID', userId, () => {});
                                        AsyncStorage.getItem("NoticeToken", (error, result) => {
                                            fetch("http://www.classnotificator.kro.kr:8888/register?id="+userId+"&token="+result)
                                                .then(response => console.log(response.json().res))
                                                .catch(err => console.error(err));
                                        })
                                        navigation.replace("Menu");
                                    }
                                })
                                .catch((err) => {
                                    Alert.alert("err", JSON.stringify(err));
                                    console.error(JSON.stringify(err));
                                    setErrorText("서버가 꺼져있습니다")
                                })
                        }}
                    />
            </View>
            <Text>{errorText}</Text>
        </View>
    )
}

export default LoginScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        width: Dimensions.get('window').width * 0.5,
        height: 70,
        backgroundColor: '#fff',
        borderWidth: 3.0,
        borderRadius: 5,
        paddingLeft: 10,
    },
    buttonAndTextContainer: {
        width: Dimensions.get('window').width * 0.5,
        paddingTop: 5,
        paddingLeft: 150,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buttonS : {
        width: 70,
        height: 70,
        paddingLeft: 150,
    }
})