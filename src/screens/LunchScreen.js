import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator, Button, Alert, FlatList } from 'react-native';

class Lunch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            errText: "로딩 중.."
         };
    }
    componentDidMount() {
        return fetch('http://www.classnotificator.kro.kr:8888/lunch.json')
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson.MLSV_YMD === "invalid") {
                    this.setState({errText: "오늘은 급식을 먹는 날이 아닙니다."})
                }
                else {
                    this.setState({dataSource: responseJson, isLoading: false})
                }
            })
            .catch(error => {
                console.error(error);
                this.setState({errText: "서버에서 정보를 불러오는데 실패했습니다."})
            })
    }
    render() {
        if(this.state.isLoading) {
            return (
                <View>
                    <Text>{this.state.errText}</Text>
                </View>
            )
        }
        else {
            return (    
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>오늘의 급식</Text>
                    </View>
                    <FlatList
                        data={this.state.dataSource.DDISH_NM.split('<br/>')}
                        renderItem={({item}) => 
                        <View style={styles.containerDish}>
                            <Text style={styles.itemDish}>{item}</Text>
                        </View>
                        }
                    />
                </View>
            )
        }
    }
}

export const LunchScreen = ({navigation}) => <Lunch navigation={navigation} name='lunch'/>

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitle: {
        alignItems: "center", 
        backgroundColor: "#FFF", 
        height: Dimensions.get('window').height / 16,
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
    containerDish: {
        backgroundColor: "#FFF",
        borderColor: "#BBB",
        borderWidth: 1,
    },
    itemDish: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    itemNTR: {
        fontSize: 12,
    },
});