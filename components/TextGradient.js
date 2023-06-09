import React from "react";
import {Text, View} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
export default function TextGradient(props){
    return(
        <View>
            <MaskedView maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>}>
                <LinearGradient colors={['#BA872C', '#E8E276', '#E1D770', '#885021']} start={{x: -0.2, y: 0}} end={{x: 1.3, y: 1}}>
                <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
                </LinearGradient>
            </MaskedView>
        </View>
    );
}