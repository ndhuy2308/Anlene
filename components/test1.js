import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import GroupButton from '../assets/svg/3button.svg';
import DuocWhite from '../assets/svg/duoc_white.svg'
import KhongDuocWhite from '../assets/svg/khongduoc_white.svg'
import ProgessO from '../assets/svg/progess_o.svg';
import ProgessV from '../assets/svg/progess_v.svg';
import ProgessX from '../assets/svg/progess_x.svg';
function Test221({navigation}) {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  // lấy font SVN - Gotham
  const [fontsLoaded] = useFonts({
    'svnBold': require('../assets/fonts/svn_gotham_bold.ttf'),
    'svnLight': require('../assets/fonts/svn_gotham_light.ttf'),
    'svnLightItalic': require('../assets/fonts/svn_gotham_light_italic.otf'),
    'svnGotham': require('../assets/fonts/svn_gotham.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  else{
    SplashScreen.hideAsync();
  }




  return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', flex: 2, alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
                      <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate("HomePage")}>
                        <Entypo name="chevron-thin-left" size={24} color="white" />
                      </TouchableOpacity>
                      
                    </View>
                    <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-end', alignSelf:'center'}}>
                      <AntDesign name="left" size={14} color="white" />
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>  
                    <Text style={[styles.textTop]}>Trang 2/6</Text>          
                </View>
                <View style={{flexDirection: 'row', flex: 2, justifyContent:'flex-start', alignItems:'center'}}>
                    <View style={{flex: 1,}}>
                        <AntDesign name="right" size={14} color="white" />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                      <TouchableOpacity style={{paddingRight: 20}}
                        onPress={() => navigation.navigate("HomePage")}
                      >
                        <Entypo name="home" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
              <Text style={{fontSize: 19, fontFamily: 'svnBold', color: 'white', textAlign: 'center'}}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>
                <View style={{flex:1, width: '100%', backgroundColor: '#73A442', borderRadius: 12, flexDirection: 'row'}}>
                  <View style={{flex: 1, backgroundColor: 'white'}}></View>
                  <View style={{flex: 1, backgroundColor: 'black'}}></View>
                  <View style={{flex: 1, backgroundColor: 'white'}}></View>
                  <View style={{flex: 1, backgroundColor: 'black'}}></View>
                </View>
                <Text style={{fontFamily: 'svnBold', fontSize: 26, textAlign: 'center', color:'yellow'}}>KIỂM TRA CƠ</Text>
                <View style={{flex: 3}}>
                  <Image style={{width: '100%', height: '100%', borderRadius: 16}} source={require('../assets/images/co.png')}></Image>
                </View>
                <Text style={[styles.textTop, {textAlign: 'center'}]}>
                Đứng rộng chân, lưng thẳng đứng,{'\n'}
                tay đưa ra sau và đan vào nhau
                </Text>
                <View style={{flex: 2}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
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

                  <View style={{ flex: 1 }} />
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
                  <View style={{flex: 1, flexDirection: 'row'}}></View>
                </View>
            </SafeAreaView>
        </LinearGradient>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  textTop: {
    textAlign:'center', color: '#ffffff', fontFamily: 'svnGotham', fontSize: 14,
    
  },
  imageContainer: {
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  line: {
    flex: 1, // Thêm thuộc tính này để giãn đường kẻ ra cho tới rìa bên phải của thành phần cha
    borderTopWidth: 2 ,
    borderStyle: 'dashed',
    borderTopColor: 'white',
    alignItems: 'center', // Thêm thuộc tính này để căn giữa đường kẻ theo chiều ngang,
    height: 14
  },
  textTop: {
    textAlign:'center', color: '#ffffff', fontFamily: 'svnGotham', fontSize: 14,
  },
  choose: {
    flex: 1, backgroundColor: '#71A162',
    borderRadius: 11,
    paddingTop: 20,
    paddingBottom: 20,
    
  },
  grediant: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#71A162',
    margin: 2,
    borderRadius: 10,
  },
});



export default Test221;