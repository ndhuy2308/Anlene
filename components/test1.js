import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {  SafeAreaView} from 'react-native-safe-area-context';

function Test1(){
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: 'powderblue'}}>
            </View>

            <View style={{flex:4, backgroundColor: 'skyblue'}}>

            </View>

            <View style={{flex:3, backgroundColor: 'steelblue'}}>

            </View>
        </SafeAreaView>
        
    )
};

export default Test1;