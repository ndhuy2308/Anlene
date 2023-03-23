import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Image} from 'react-native';
import { useCallback } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import GroupButton from './assets/svg/3button.svg';
import Test1 from './components/test1';
function Test221() {
  // lấy font SVN - Gotham
  const [fontsLoaded] = useFonts({
    'svnBold': require('./assets/fonts/svn_gotham_bold.ttf'),
    'svnLight': require('./assets/fonts/svn_gotham_light.ttf'),
    'svnLightItalic': require('./assets/fonts/svn_gotham_light_italic.otf'),
    'svnGotham': require('./assets/fonts/svn_gotham.otf'),
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
        <ImageBackground source={require('./assets/images/page1.png')} style={styles.bg}>
          <View style={{flex: 1}}>
          <SafeAreaView style={{
          flex: 1.4, 
          flexDirection: 'row', 
          justifyContent: 'center',    
          }}>
          <LinearGradient colors={['#0E470E', '#20680D', '#2E820D', '#13500E', 'transparent']} style={{flex: 1, position: 'absolute', top: 0, bottom: 0, left:0, right: 0}}>
            <View style={{flexDirection: 'column', alignItems:'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
              <AntDesign name="left" size={14} color="white" />
              <Text style={{alignSelf: 'center', fontFamily:'svnGotham', color: 'white', fontSize: 14, paddingLeft: 10, paddingRight: 10}}>Trang 1/6</Text>
              <AntDesign name="right" size={14} color="white" />
            </View>
            <Text style={{textAlign:'center', fontFamily:'svnBold', color: "#E8E276", fontSize: 25}}>TẾT BẬN RỘN{"\n"}
                  CƠ-XƯƠNG-KHỚP CÓ KHOẺ {"\n"}
                  ĐỂ CHU TOÀN? </Text>
                  <Text style={styles.textTop}>Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, </Text><Text style={styles.textTop}>làm sao chu toàn?</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textTop}>Ngay lúc này, </Text>
              <Text style={{textAlign:'center', color: "#E8E276", fontFamily: 'svnBold'}}>hãy Kiểm tra Sức khoẻ Cơ-Xương-Khớp</Text>
            </View>
            <Text style={styles.textTop}>cùng Anlene để Tết này cả nhà vui khoẻ đón Tết,</Text>
            <Text style={styles.textTop}>trọn vẹn niềm vui.</Text>
          </View>
            </LinearGradient>
            </SafeAreaView>
        
        <View style={{flex: 2.6, justifyContent: 'flex-end'}}>
          <LinearGradient
                colors={['transparent', '#0E470E', '#20680D', '#2E820D', '#13500E', ]}
                start={{ x: 1.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{  }}
              >
              <LinearGradient
                colors={['#FFC200', '#FFFCAB', '#ECD24A', '#ECD24A', '#FFC200']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.grediant}
              >
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        KIỂM TRA NGAY
                    </Text>
                </TouchableOpacity>
              </LinearGradient>
              <View style={{padding:5}}></View>
              <GroupButton style={{alignSelf: 'center'}}></GroupButton>
              <View style={{alignItems:'center'}}>
                <Text style={styles.TextBottom}>Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene</Text>
                <Text style={[styles.TextBottom, {marginLeft: 20, marginRight: 20, paddingBottom: 5}]}>Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường</Text>
              </View>  
            </LinearGradient>
        </View>
        </View>
        </ImageBackground>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  textTop: {
    textAlign:'center', color: '#ffffff', fontFamily: 'svnGotham', fontSize: 14
  },
  TextBottom: {
    textAlign:'center', color: '#ffffff', fontFamily: 'svnLightItalic', fontSize: 14
  },
  bg: {
    flex: 1
  },
  kiemTraNgay: {fontFamily: 'svnGotham', fontSize: 30, textAlign: 'center', color: 'white', paddingLeft: 30, paddingRight: 30, paddingTop: 4, paddingBottom: 4,
  borderColor: '#ECD24A', borderWidth: 2, borderRadius: 30
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
    paddingLeft: 20, paddingRight: 20,
    paddingTop:4, paddingBottom:4
  }

});


function Test2308(){
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'skyblue'}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 2, backgroundColor: 'red'}}></View>
        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
      </SafeAreaView>
    </View>
  );
}

export default Test221;