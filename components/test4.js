import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, ScrollView, Text, View, TouchableOpacity, Pressable, TextInput, Image, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useState, useEffect, onChangeText } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import TextGradient from './TextGradient';

function Test224({navigation}) {
    const FullNameError= '';
    const PhoneNumberError = '';
    const EmailError = '';
    const [checked, setChecked] = useState(true);
    const checkedImg = require('../assets/images/checked.png');
    const uncheckImg = require('../assets/images/uncheck.png');
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
    <View
        style={styles.container}
    > 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#969696', '#969696']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flex: 2, alignSelf:'center'}}>
                        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
                        <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate("TestPage3")}>
                            <Entypo name="chevron-thin-left" size={24} color="white" />
                        </TouchableOpacity>
                        
                        </View>
                        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-end', alignSelf:'center'}}>
                        <AntDesign name="left" size={14} color="white" />
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>  
                        <Text style={[styles.textTop]}>Trang 4/6</Text>          
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
                <View style={styles.container}>
                    <Image source={require('../assets/images/logo.png')} style={{width: 116.6, height: 28.4, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10}}></Image>
                    <Text style={{fontFamily: 'svnBold', color: '#DF1E13', fontSize: 26,  textAlign: 'center'}}>HÃY CẨN THẬN</Text>
                    <Text style={{flexShrink: 1, textAlign: 'center', fontFamily: 'svnGotham', fontSize: 13, color: 'white'}}>Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng{'\n'} cần quan tâm đến hệ vận động nhiều hơn nhé,{'\n'}
                    bởi sau tuổi 40, sức khoẻ Cơ-Xương-Khớp{'\n'}
                    suy giảm:</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                      <View style={{flex: 1, alignItems: 'center'}}>
                        <Image source={require('../assets/images/co.png')}></Image>
                        <View style={[styles.textGroup1, {width: '80%'}]}>
                          <Text style={styles.textGroup1_1}>KHỐI CƠ</Text>
                          <Text style={styles.textGroup1_2}>MẤT ĐI</Text>
                        </View>
                      </View>

                      <View style={{flex: 1, alignItems: 'center'}}>
                        <Image source={require('../assets/images/xuong.png')}></Image>
                        <View style={[styles.textGroup1, {width: '100%'}]}>
                          <Text style={styles.textGroup1_1}>MẬT ĐỘ XƯƠNG</Text>
                          <Text style={styles.textGroup1_2}>SUY GIẢM</Text>
                        </View>
                      </View>

                      <View style={{flex: 1, alignItems: 'center'}}>
                        <Image source={require('../assets/images/khop.png')}></Image>
                        <View style={[styles.textGroup1, {width: '80%'}]}>
                          <Text style={styles.textGroup1_1}>KHỚP</Text>
                          <Text style={styles.textGroup1_2}>THOÁI HOÁ</Text>
                        </View>
                      </View>
                    </View>
                  <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/images/4-golden.png')}></Image>
                    <Text style={styles.textS}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                    <Text style={styles.textS}>**Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis{'\n'}Foundation (2009). Hormones and Healthy Bones</Text>
                    <TextGradient text="LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ" style={{fontSize:14, fontFamily: 'svnBold'}}/>
                    <Text style={{fontFamily: 'svnGotham', fontSize: 13, color: 'white', textAlign: 'center'}}>Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ{'\n'} Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn {'\n'}đang chờ bạn!</Text>
                    <Pressable>
                      <Text style={{fontFamily: 'svnGotham', color: '#ECD24A', borderBottomColor: '#ECD24A', borderBottomWidth: 1}}>Xem thêm</Text>
                    </Pressable>

                    <View style={{margin: 20}}>
                      <LinearGradient
                                  colors={['#FFC200', '#FFFCAB', '#ECD24A', '#ECD24A', '#FFC200']}
                                  start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                  style={styles.grediant}
                              >
                                  <TouchableOpacity style={styles.buttonContainer}
                                      onPress = {()=> navigation.navigate('TestPage4')}
                                  >
                                      <Text style={styles.buttonText}>
                                          Nhận ngay
                                      </Text>
                                  </TouchableOpacity>
                        </LinearGradient>
                    </View>
                  </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
        </TouchableWithoutFeedback>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTop: {
    textAlign:'center', color: '#ffffff', fontFamily: 'svnGotham', fontSize: 14
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    fontFamily: 'svnGotham',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'svnBold',
    color: 'white',
  },
  textInputError: {
    fontFamily: 'svnBold',
    fontSize: 12,
    color: '#ECD24A'
  },
  textGroupContainer: {
    alignSelf:'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textGroupContent: {

  },
  textGroup1: {
    height: 50, marginTop: 5, justifyContent: 'center', backgroundColor: '#187B33', borderColor: 'white', borderWidth: 1.5, borderRadius: 8, alignItems: 'center'
  },
  textGroup1_1: {
    color: 'white',
    fontFamily: 'svnBold',
    fontSize: 13
  },  
  textGroup1_2: {
    color: '#ECD24A',
    fontFamily: 'svnGotham',
    fontSize: 12
  },  
  inner: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8B8B8',
    margin: 3,
    borderRadius: 24,
  },
  textS: {
    fontSize: 11,
    fontFamily: 'svnLightItalic',
    color: 'white'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 28,
    paddingLeft: 22, paddingRight: 22,
    paddingTop:4, paddingBottom:4
  },
  grediant: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#B70002',
    margin: 3,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 28,
    paddingLeft: 22, paddingRight: 22,
    paddingTop:4, paddingBottom:4
  },
  
  

});



export default Test224;