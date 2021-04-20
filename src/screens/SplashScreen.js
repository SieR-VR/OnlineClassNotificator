import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);

            AsyncStorage.getItem('StudentID').then((value) => {
                if(value === null) {
                    navigation.replace('Login');
                }
                else {
                    AsyncStorage.getItem("StudentID", (error, userId) => {
                        AsyncStorage.getItem("NoticeToken", (error, token) => {
                            fetch("http://www.classnotificator.kro.kr:8888/register?id="+userId+"&token="+token)
                                .catch(err => console.log(err));
                        })
                    })
                    navigation.replace('Menu');
                }
            })
        }, 3000);
    }, []);

    return( 
        <View style={styles.container}>
            <Image
                source={require("../../assets/jinsung.jpg")}
                style={{margin: 30}}
            />
            <ActivityIndicator
                animating={animating}
                color="#6990f7"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    activityIndicator: {
        alignItems: "center",
        height: 80,
    }
})