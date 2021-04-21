import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

class ColTable extends React.Component {
    render() {
        return (
            <View style={styles.column}>           
                <View style={styles.cell}><Text style={styles.titleText}>{this.props.periods[0]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[1]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[2]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[3]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[4]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[5]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[6]}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{this.props.periods[7]}</Text></View>
            </View>
        )
    }
}

class TitleColTable extends React.Component {
    render() {
        return (
            <View style={styles.column}>           
                <View style={styles.cell}></View>
                <View style={styles.cell}><Text style={styles.titleText}>1</Text></View>
                <View style={styles.cell}><Text style={styles.titleText}>2</Text></View>
                <View style={styles.cell}><Text style={styles.titleText}>3</Text></View>
                <View style={styles.cell}><Text style={styles.titleText}>4</Text></View>
                <View style={styles.cell}><Text style={styles.titleText}>5</Text></View>
                <View style={styles.cell}><Text style={styles.titleText}>6</Text></View>
                <View style={styles.cell}><Text style={styles.titleText}>7</Text></View>
            </View>
        )
    }
}

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            errText: "로딩 중..",
         };
    }
    componentDidMount() {
        return fetch('http://www.classnotificator.kro.kr:8888/203.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    { 
                        tableData: responseJson,
                        isLoading: false
                    },
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
                <View style={styles.container}>
                    <TitleColTable/>
                    <ColTable periods={['월'].concat(this.state.tableData[0])}/>
                    <ColTable periods={['화'].concat(this.state.tableData[1])}/>
                    <ColTable periods={['수'].concat(this.state.tableData[2])}/>
                    <ColTable periods={['목'].concat(this.state.tableData[3])}/>
                    <ColTable periods={['금'].concat(this.state.tableData[4])}/>
                </View>                    
                <View style={styles.imagesContainer}>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                         <Image source={require("../../assets/SidebarIcon.png")} style={{width: 100, height: 100}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export const TimeTableScreen = ({navigation}) => <TimeTable navigation={navigation} name='timetable'/>

const styles = StyleSheet.create({
    container: { flexDirection: "row" },
    column: { flexDirection: "column", width: Dimensions.get('window').width / 6 },
    cell: { backgroundColor: "#FFF", borderWidth: 1, height: Dimensions.get('window').width / 6, justifyContent: "center" },
    titleText: { textAlign: "center", fontWeight: "bold", fontSize: 32 },
    text: { textAlign: "center", fontWeight: "bold", fontSize: 14 },
    imagesContainer: { height: 240, width: Dimensions.get('window').width }
})