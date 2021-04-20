import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            errText: "로딩 중.."
         };
    }
    componentDidMount() {
        return fetch('http://www.classnotificator.kro.kr:8888/203.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    { 
                        dataSource: responseJson,
                        isLoading: false
                    },
                    function() {}
                );
            })
            .catch(error => {
                console.error(error);
                this.setState(
                    {
                        errText: "서버에서 정보를 불러오는데 실패했습니다."
                    }
                )
            })
    }
    render() {
        if(this.state.isLoading) {
            return (
                <View style={{alignItems:"center", justifyContent:"center", width:Dimensions.get('window').width, height:Dimensions.get('window').height}}>
                    <Text style={{fontSize:24, fontWeight:"bold"}}>{this.state.errText}</Text>
                </View>
            )
        }
        return (
            <View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.WhiteCell}>
                        <TouchableOpacity
                            style={{alignItems:"center", margin:20}}
                            onPress={this.props.navigation.openDrawer}
                        >
                            <Image source={require("../../assets/SimpleLineIcon.webp")} style={{width: Dimensions.get('window').width / 9, height: Dimensions.get('window').width / 6}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.BlackCell}>
                        <Text style={Styles.TitleText}>월</Text>
                    </View>
                    <View style={Styles.WhiteCell}>
                        <Text style={Styles.TitleText}>화</Text>
                    </View>
                    <View style={Styles.BlackCell}>
                        <Text style={Styles.TitleText}>수</Text>
                    </View>
                    <View style={Styles.WhiteCell}>
                        <Text style={Styles.TitleText}>목</Text>
                    </View>
                    <View style={Styles.BlackCell}>
                        <Text style={Styles.TitleText}>금</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.BlackCell}><Text style={Styles.TitleText}>1</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[0].Monday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[0].Tuesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[0].Wednesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[0].Thursday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[0].Friday}</Text></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.WhiteCell}><Text style={Styles.TitleText}>2</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[1].Monday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[1].Tuesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[1].Wednesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[1].Thursday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[1].Friday}</Text></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.BlackCell}><Text style={Styles.TitleText}>3</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[2].Monday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[2].Tuesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[2].Wednesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[2].Thursday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[2].Friday}</Text></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.WhiteCell}><Text style={Styles.TitleText}>4</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[3].Monday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[3].Tuesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[3].Wednesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[3].Thursday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[3].Friday}</Text></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.BlackCell}><Text style={Styles.TitleText}>5</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[4].Monday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[4].Tuesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[4].Wednesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[4].Thursday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[4].Friday}</Text></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.WhiteCell}><Text style={Styles.TitleText}>6</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[5].Monday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[5].Tuesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[5].Wednesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[5].Thursday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[5].Friday}</Text></View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={Styles.BlackCell}><Text style={Styles.TitleText}>7</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[6].Monday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[6].Tuesday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[6].Wednesday}</Text></View>
                    <View style={Styles.BlackCell}><Text style={Styles.BlackText}>{this.state.dataSource[6].Thursday}</Text></View>
                    <View style={Styles.WhiteCell}><Text style={Styles.WhiteText}>{this.state.dataSource[6].Friday}</Text></View>
                </View>
            </View>
        )
    }
};

export const TimeTableScreen = ({navigation}) => <TimeTable navigation={navigation} name='timetable'/>

const Styles = StyleSheet.create({
    WhiteCell: {
        width: Dimensions.get('window').width / 6,
        height: Dimensions.get('window').width / 6,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    BlackCell: {
        width: Dimensions.get('window').width / 6,
        height: Dimensions.get('window').width / 6,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    WhiteText: {
        color: "#000",
        fontWeight: "bold",
    },
    BlackText: {
        color: "#000",
        fontWeight: "bold",
    },
    TitleText: {
        color: "#000",
        fontSize: 32,
        fontWeight: "bold",
    }
})