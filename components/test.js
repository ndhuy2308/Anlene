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
import DuocWhite from '../assets/svg/duoc_white.svg';
import KhongDuocWhite from '../assets/svg/khongduoc_white.svg';
import Images from "../assets/images";
import TextGradient from './TextGradient';
const image1 = require('../assets/images/o.png');
const image2 = require('../assets/images/x.png');
const image3 = require('../assets/images/3.png');
const image4 = require('../assets/images/4.png');

function Test221({navigation}) {
  const [pressed1, setPressed1] = useState(false);
  const [pressed2, setPressed2] = useState(false);
  const [index, setIndex] = useState(5);
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
                <View style={{flex:1, backgroundColor: '#73A442', borderRadius: 12, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 5}}>
                  <View style={{flexDirection: 'column', alignItems: 'center', zIndex: 1, elevation: 1}}>
                    <Image style={styles.imageProgess} source={image1}></Image>
                    <Text style={styles.textProgess}>Cơ</Text>
                  </View>
                  
                  <View style={{height: 30, width: '100%', justifyContent:'center', position: 'absolute'}}>
                    <View style={{borderTopWidth: 3, borderTopColor: 'white', borderStyle: 'dashed', width: '80%', marginLeft: 40, zIndex: 1, elevation: 1}} />
                  </View>
                  <View style={{height: 30, width: '100%', justifyContent:'center', position: 'absolute'}}>
                    <View style={{borderTopWidth: 3, borderTopColor: 'white', width: "0%", marginLeft: 40, zIndex: 1, elevation: 1}} />
                  </View> 
                  
                  
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Image style={styles.imageProgess} source={image2}></Image>
                    <Text style={styles.textProgess}>Xương</Text>
                  </View>


                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Image style={styles.imageProgess} source={image2}></Image>
                    <Text style={styles.textProgess}>Khớp</Text>
                  </View>

             
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Image style={styles.imageProgess} source={image2}></Image>
                    <Text style={styles.textProgess}>Đề kháng</Text>
                  </View>
                </View>
 
                </View>
                <TextGradient text="KIỂM TRA CƠ" style={{fontSize: 20, fontFamily: 'svnBold', textAlign: 'center'}} />
                <View style={{flex: 5}}>
                  <Image style={{width: '100%', height: '100%', borderRadius: 16}} source={require('../assets/images/test-1.png')} />
                </View>
                <Text style={[styles.textTop, {textAlign: 'center', paddingTop: 10}]}>
                Đứng rộng chân, lưng thẳng đứng,{'\n'}
                tay đưa ra sau và đan vào nhau
                </Text>
                <View style={{flex: 2}}>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                   <Pressable>
                   <LinearGradient start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={['#FFC200', '#FFFCAB', '#ECD24A', '#ECD24A', '#FFC200']}
                    style={{borderRadius: 5}}>
                      <View style={styles.circleGradient}>
                        <DuocWhite style={styles.visit}></DuocWhite>
                      </View>
                    </LinearGradient>
                   </Pressable>

                   <Pressable style={{paddingLeft: 20}}>
                   <LinearGradient start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={['transparent', 'transparent']}
                    style={{borderRadius: 5}}>
                      <View style={styles.circleGradient}>
                        <KhongDuocWhite style={styles.visit}></KhongDuocWhite>
                      </View>
                    </LinearGradient>
                   </Pressable>
                  </View>
                </View>
                <View style={{flex: 2}}>
                  <TouchableOpacity style={{alignSelf: 'center', width: '50%', backgroundColor: '#B8B8B8', paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 10, borderRadius: 30}}>
                    <Text style={{textAlign: 'center', fontSize: 16, fontFamily: 'svnGotham', color: 'white'}}>XÁC NHẬN</Text>
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', fontFamily: 'svnLightItalic', color: 'white'}}>*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. {'\n'}Đảm bảo vị trí tập an toàn để không té ngã.</Text>
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
    textAlign:'center', color: '#ffffff', fontFamily: 'svnGotham', fontSize: 14
  },
  textProgess: {
    color: 'white',
    fontFamily: 'svnGotham',
    fontSize: 14,
  },
  imageProgess: {
    width: 30, height: 30
  },
  visit: {
    textAlign: "center",
    backgroundColor: "#71A162",
    fontSize: 14
  },
  circleGradient: {
    margin: 2,
    backgroundColor: "#71A162",
    borderRadius: 5
  },
});



export default Test221;