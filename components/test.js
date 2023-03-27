import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useState, useEffect } from 'react';
import DuocWhite from '../assets/svg/duoc_white.svg'
import KhongDuocWhite from '../assets/svg/khongduoc_white.svg'

const Test223 = ({navigation}) => {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={[pressed1 ? 'transparent' : '#FFC200', pressed1 ? 'transparent' : '#FFFCAB', '#ECD24A', '#ECD24A', pressed1 ? 'transparent' : '#FFC200']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant}
      >
          <Pressable style={styles.buttonContainer}
              onPress = {()=> {navigation.navigate('TestPage2'); setPressed1(false); setPressed2(true); console.log(pressed1, pressed2);}}
          >
              <DuocWhite></DuocWhite>
          </Pressable>
      </LinearGradient>


      <LinearGradient
          colors={[pressed2 ? 'transparent' : '#FFC200', pressed2 ? 'transparent' : '#FFFCAB', '#ECD24A', '#ECD24A', pressed2 ? 'transparent' : '#FFC200']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant}
      >
          <Pressable style={styles.buttonContainer}
              onPress = {()=> {navigation.navigate('TestPage2'); setPressed1(true); setPressed2(false); console.log(pressed1, pressed2);}}
          >
              <KhongDuocWhite></KhongDuocWhite>
          </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    
  }, 
  grediant: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#71A162',
    margin: 1,
    borderRadius: 10,
  },
});
export default Test223;