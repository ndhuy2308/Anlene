import { Modal, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Image} from 'react-native';
import { useCallback, useState, useEffect, useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import Images from "../assets/images";
import { ApplicationContext } from './AppContext';
import {updateCo, updateXuong, updateDeKhang, updateKhop, updateKetQua, ResetKetQua} from './Action'
const image1 = require('../assets/images/o.png');
const image2 = require('../assets/images/2.png');
const image5 = require('../assets/images/v.png');
const image6 = require('../assets/images/x.png');
const image3 = require('../assets/images/3.png');
const image4 = require('../assets/images/4.png');
function Page2Test({navigation}) {
  const { state, dispatch } = useContext(ApplicationContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [step, setStep] = useState(1);
  // 0 chưa chọn 1 - đang chọn, 2 - được, 3 - không được, 4 - hình ảnh 
  const [step1, setStep1] = useState(0);
  const [step2, setStep2] = useState(0);
  const [step3, setStep3] = useState(0);
  const [step4, setStep4] = useState(0);
  const changeStepResults = () => {
    dispatch(updateCo(step1));
    dispatch(updateXuong(step2));
    dispatch(updateKhop(step3));
    dispatch(updateDeKhang(step4));
    console.log("Ok")
  }
  const processImage =  useEffect(() => {
    if (step === 1) {
      if (activeIndex === null) {
        setStep1(0)
      }
      else if (activeIndex === 0) {
        setStep1(1)
      }
      else if (activeIndex === 1) {
        setStep1(2);
        console.log(step);
      }
      else if (activeIndex === 2) {
        setStep1(3)
      }
      else {
        setStep1(4)
      }
    }
    if (step === 2) {
      if (activeIndex === null) {
        setStep2(0)
      }
      else if (activeIndex === 0) {
        setStep2(1)
      }
      else if (activeIndex === 1) {
        setStep2(2)
      }
      else if (activeIndex === 2) {
        setStep2(3)
      }
      else {
        setStep2(4)
      }
    }
    if (step === 3) {
      if (activeIndex === null) {
        setStep3(0)
      }
      else if (activeIndex === 0) {
        setStep3(1)
      }
      else if (activeIndex === 1) {
        setStep3(2)
      }
      else if (activeIndex === 2) {
        setStep3(3)
      }
      else {
        setStep3(4)
      }
    }
    if (step === 4) {
      if (activeIndex === null) {
        setStep4(0)
      }
      else if (activeIndex === 0) {
        setStep4(1)
      }
      else if (activeIndex === 1) {
        setStep4(2)
      }
      else if (activeIndex === 2) {
        setStep4(3)
      }
      else {
        setStep4(4)
      }
    }
    }, []);
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <View style={styles.modalView}>
              <Text style={{color: '#478449', fontFamily: 'svnBold', fontSize: 22, paddingTop: 10}}>CẢM ƠN</Text>
              <Text style={{color: '#1D1C1C', textAlign: 'center', fontFamily: 'svnGotham', fontSize: 15, padding: 10}}>Bạn đã tham gia bài kiểm tra sức {'\n'}khoẻ Hãy tiếp tục để có thể nhận kết quả {'\n'}kiểm tra sức khoẻ của bạn.</Text>
              <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity
                  style={[styles.buttonContainer, {backgroundColor: 'white', borderColor: '#B70002', borderWidth: 3}]}
                  onPress={() => {navigation.navigate('HomePage')}}>
                  <Text style={[{color: '#B70002'}, styles.buttonText]}>HUỶ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.buttonContainer, {backgroundColor: '#B70002', borderColor: '#B70002', borderWidth: 3}]}
                  onPress={() => {navigation.navigate('Page3')}}>
                  <Text style={[{color: 'white'}, styles.buttonText]}>TIẾP TỤC</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        <LinearGradient
          colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row', flex: 2, alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
                      <TouchableOpacity style={{paddingRight: 20}} onPress={() => {navigation.navigate("HomePage")}}>
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
                    <Image style={styles.imageProgess} source={
                      step1 === 0? image1 :
                      step1 === 2? image5 :
                      step1 === 3? image6 : null
                       }>
                      </Image>
                    <Text style={styles.textProgess}>Cơ</Text>
                  </View>
                  
                  <View style={{height: 30, width: '100%', justifyContent:'center', position: 'absolute'}}>
                    <View style={{borderTopWidth: 1.5, borderTopColor: 'white', borderStyle: 'dashed', width: '80%', marginLeft: 40, zIndex: 1, elevation: 1}} />
                  </View>
                  <View style={{height: 30, width: '100%', justifyContent:'center', position: 'absolute'}}>
                    <View style={{borderTopWidth: 2, borderTopColor: 'white', width: step === 1? '0%' : (step === 2? '25%' : (step === 3 ? '50%': '80%')), marginLeft: 40, zIndex: 1, elevation: 1}} />
                  </View> 
                  
                  
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Image style={styles.imageProgess} source={
                      step2 === 0? image2 :
                      step2 === 1? image1 :
                      step2 === 2? image5 :
                      step2 === 3? image6 : null
                      }>
                      </Image>
                    <Text style={styles.textProgess}>Xương</Text>
                  </View>


                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Image style={styles.imageProgess} source={
                      step3 === 0? image2 :
                      step3 === 1? image1 :
                      step3 === 2? image5 :
                      step3 === 3? image6 : null
                      }>
                      </Image>
                    <Text style={styles.textProgess}>Khớp</Text>
                  </View>

             
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Image style={styles.imageProgess} source={
                      step4 === 0? image2 :
                      step4 === 1? image1 :
                      step4 === 2? image5 :
                      step4 === 3? image6 : null
                      }>
                      </Image>
                    <Text style={styles.textProgess}>Đề kháng</Text>
                  </View>
                </View>
 
                </View>
                <Text style={{color: '#E1D770', fontSize: 20, fontFamily: 'svnBold', alignSelf: 'center', padding: 5}}>KIỂM TRA {
                      step === 1 ? 'CƠ' : (step === 2 ? 'XƯƠNG' : (step === 3 ? 'KHỚP' : 'ĐỀ KHÁNG'))
                    }</Text>
                <View style={{position: 'relative', width: '100%', height: '100%', borderRadius: 16, flex: 5}}>
                  <Image style={{width: '100%', height: '100%', borderRadius: 16, borderColor: activeIndex === 1? '#73A442' : (activeIndex === 2 ? '#C6463A' : null) , borderWidth: 3}} source={step === 1? Images.imageCo : (step === 2? Images.imageXuong : (step === 3 ? Images.imageKhop : Images.imageDeKhang) ) } />
                  <Image style={{position: 'absolute', top: -10, right: -12, width: 42, height: 42, backgroundColor: activeIndex ? 'white': 'transparent', borderRadius: 50}} source={activeIndex === 1 ? Images.imageBorderV : (activeIndex === 2 ? Images.imageBorderX : null)} />
                </View>
                <Text style={[styles.textTop, {textAlign: 'center', paddingTop: 10, paddingLeft: '10%', paddingRight: '10%'}]}>
                {step === 1 ? 'Thẳng lưng trước ghế, đứng lên ngồi xuống 5 lần từ 6-10 giây'
                : step === 2 ? 'Duỗi 2 tay về phía trước, từ từ cúi xuống để chạm vào mũi bàn chân'
                : step === 3 ? 'Đứng rộng chân, lưng thẳng đứng, tay đưa ra sau và đan vào nhau'
                : step === 4 ? '6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?': '6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?'}
                </Text>
                <View style={{flex: 2}}>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                  <Pressable
                      onPress={() => {
                        if (step === 1 && state.KetQua > 0) {
                          dispatch(updateKetQua(0));
                        }
                        step <= 4 ? setActiveIndex(1) : null;
                        if (step === 1) {
                          setTimeout(() => {setActiveIndex(0), setStep(step + 1), setStep1(2), setStep2(1)},  0)
                        } else if (step === 2) {
                          setTimeout(() => {setActiveIndex(0), setStep(step + 1), setStep2(2), setStep3(1)}, 0)
                        } else if (step === 3) {
                          setTimeout(() => {setActiveIndex(0), setStep(step + 1), setStep3(2), setStep4(1)}, 0)
                        }
                        else if (step === 4) {
                          setTimeout(() => {setStep(step + 1), setStep4(2)}, 0)
                        }
                      }}
                      style={{ paddingLeft: 20 }}
                   >
                      <LinearGradient
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={[
                          activeIndex === 1 ? '#FFC200' : 'transparent',
                          activeIndex === 1 ? '#FFFCAB' : 'transparent',
                          activeIndex === 1 ? '#ECD24A' : 'transparent',
                          activeIndex === 1 ? '#ECD24A' : 'transparent',
                          activeIndex === 1 ? '#FFC200' : 'transparent',
                        ]}
                        style={{ borderRadius: 5 }}
                      >
                        <View style={styles.circleGradient}>
                          <Image source={step < 4 ? Images.Duoc : Images.HiemKhi}/>
                        </View>
                      </LinearGradient>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        if (step === 1 && state.KetQua > 0) {
                          dispatch(updateKetQua(1));
                        }
                        step <= 4 ? setActiveIndex(2) : null;
                        if (step === 1) {
                          if(state.KetQua < 1){
                            dispatch(updateKetQua(state.KetQua+1));
                          }
                          setTimeout(() => {setActiveIndex(0), setStep(step + 1), setStep1(3), setStep2(1)},  0)
                        } else if (step === 2) {
                          if(state.KetQua < 2){
                            dispatch(updateKetQua(state.KetQua+1));
                          }
                          setTimeout(() => {setActiveIndex(0), setStep(step + 1), setStep2(3), setStep3(1)}, 0)
                        } else if (step === 3) {
                          if(state.KetQua < 3){
                            dispatch(updateKetQua(state.KetQua+1));
                          }
                          setTimeout(() => {setActiveIndex(0), setStep(step + 1), setStep3(3), setStep4(1)}, 0)
                        }
                        else if (step === 4) {
                          if(state.KetQua < 4){
                            dispatch(updateKetQua(state.KetQua+1));
                          }
                          setTimeout(() => {setStep(step + 1), setStep4(3)}, 0)
                        }
                      }}
                      style={{ paddingLeft: 20 }}
                    >
                      <LinearGradient
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={[
                          activeIndex === 2 ? '#FFC200' : 'transparent',
                          activeIndex === 2 ? '#FFFCAB' : 'transparent',
                          activeIndex === 2 ? '#ECD24A' : 'transparent',
                          activeIndex === 2 ? '#ECD24A' : 'transparent',
                          activeIndex === 2 ? '#FFC200' : 'transparent',
                        ]}
                        style={{ borderRadius: 5 }}
                      >
                        <View style={styles.circleGradient}>
                          <Image source={step < 4 ? Images.KhongDuoc : Images.NhieuLan}/>
                        </View>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
                <View style={{flex: 2}}>
                  <TouchableOpacity disabled={step ===5 ? false : true} style={[styles.shadow, {alignSelf: 'center', width: '50%', backgroundColor: step === 5? '#B70002' : '#B8B8B8', paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 10, borderRadius: 30}]}
                  onPress={() => {setModalVisible(true) ; changeStepResults(); }}>
                    <Text style={{textAlign: 'center', fontSize: 16, fontFamily: 'svnGotham', color: 'white'}}>XÁC NHẬN</Text>
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center', fontFamily: 'svnLightItalic', color: 'white', fontSize: 14}}>*Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. {'\n'}Đảm bảo vị trí tập an toàn để không té ngã.</Text>
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
    width: 30, height: 30,
    backgroundColor: '#73A442',
    borderRadius: 50
  },
 
  circleGradient: {
    margin: 2,
    backgroundColor: "#71A162",
    borderRadius: 5,
    padding: 5
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    
    elevation: 11,
  },
  modalView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 3,
    borderRadius: 24,
    width: '40%',
  },
  buttonText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 18,
    paddingLeft: 22, paddingRight: 22,
    paddingTop:4, paddingBottom:4
  },
});



export default Page2Test;