import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import GroupButton from '../assets/svg/3button.svg';
import Logo from '../assets/svg/logo.svg';

const Test222 = ({navigation}) => {

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
        <View style={{flex: 1}}>
        <ImageBackground source={require('../assets/images/page1.png')} style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 2}}>
                    <LinearGradient colors={['#0E470E', '#20680D', '#2E820D', '#13500E', 'transparent']} 
                                    start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 0.52 }}
                                    style={{flex: 1 }}>
                        <SafeAreaView style={{paddingLeft: 10, paddingRight: 10}}>
                            <View style={{flexDirection: 'column', alignItems:'center'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row', flex: 2, justifyContent:'flex-end', alignSelf:'center'}}>
                                        <AntDesign name="left" size={14} color="white" />
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>  
                                        <Text style={[styles.textTop]}>Trang 1/6</Text>          
                                    </View>
                                    <View style={{flexDirection: 'row', flex: 2, justifyContent:'flex-start', alignItems:'center'}}>
                                        <View style={{flex: 1,}}>
                                            <AntDesign name="right" size={14} color="white" />
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                            <Logo width="66.5" height="17.75" />
                                        </View>
                                    </View>
                                </View>
                                <Text style={{textAlign:'center', fontFamily:'svnBold', color: "#E8E276", fontSize: 25, paddingTop: 10}}>TẾT BẬN RỘN{"\n"}
                                    CƠ-XƯƠNG-KHỚP CÓ KHOẺ {"\n"}    
                                    ĐỂ CHU TOÀN? </Text>
                                <Text style={styles.textTop}>Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, </Text><Text style={styles.textTop}>làm sao chu toàn?</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.textTop}>Ngay lúc này, </Text>
                                    <Text style={{textAlign:'center', color: "#ECD24A", fontFamily: 'svnBold'}}>hãy Kiểm tra Sức khoẻ Cơ-Xương-Khớp</Text>
                                </View>
                                <Text style={styles.textTop}>cùng Anlene để Tết này cả nhà vui khoẻ đón Tết,</Text>
                                <Text style={styles.textTop}>trọn vẹn niềm vui.</Text>
                            </View>
                        </SafeAreaView>
                    </LinearGradient>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <LinearGradient
                    colors={['transparent', '#0E470E', '#20680D', '#2E820D', '#13500E']}
                    start={{ x: 0.0, y: 0.32 }} end={{ x: 0.0, y: 1.0 }}
                    style={{ flex: 1}}
                    >
                        <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
                            <LinearGradient
                                colors={['#FFC200', '#FFFCAB', '#ECD24A', '#ECD24A', '#FFC200']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.grediant}
                            >
                                <TouchableOpacity style={styles.buttonContainer}
                                    onPress = {()=> navigation.navigate('TestPage2')}
                                >
                                    <Text style={styles.buttonText}>
                                        KIỂM TRA NGAY
                                    </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={{padding:5}}></View>
                            <GroupButton style={{alignSelf: 'center'}}></GroupButton>
                            <View style={{alignItems:'center', paddingLeft: 10, paddingRight: 10}}>
                                <Text style={styles.TextBottom}>Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene</Text>
                                <Text style={[styles.TextBottom, {marginLeft: 20, marginRight: 20, paddingBottom: 5}]}>Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường</Text>
                            </View>
                        </SafeAreaView>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    textTop: {
        textAlign:'center', color: '#ffffff', fontFamily: 'svnGotham', fontSize: 14,
        
    },
      TextBottom: {
        textAlign:'center', color: '#ffffff', fontFamily: 'svnLightItalic', fontSize: 13,
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
export default Test222;