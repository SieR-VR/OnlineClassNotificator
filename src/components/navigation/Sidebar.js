import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { StudentID: "" };
    }
    componentDidMount() {
        return AsyncStorage.getItem('StudentID', (error, result) => {
            this.state.StudentID = result;
        })
    }
    render() {
        return (
            <View>
                <View style={styles.profileContainer}>
                    <View style={styles.profile}>
                        <View style={{marginLeft:12}}>
                            <Text style={{opacity:0.6}}>학번</Text>
                            <Text style={{fontSize:22, color:'white', opacity:0.9}}>{this.state.StudentID}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={_ => this.props.navigation.closeDrawer()}>
                        <Image source={require('../../../assets/xIcon.webp')} style={{width:50, height:50}}/>
                    </TouchableOpacity>
                </View>

                <View>
                    <DrawerNavigatorItems {...this.props}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileContainer : {
        display:"flex", 
        flexDirection:"row",
        justifyContent: "space-between",
        backgroundColor: "#666",
    },
    profile: {
        display:"flex",
        flexDirection:"row",
        paddingTop: 25,
        paddingLeft: 20,
        paddingBottom: 15,
    },
});