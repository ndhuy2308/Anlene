import { Modal, StyleSheet, ScrollView, Text, View, TouchableOpacity, Pressable, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {  SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState, useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { ApplicationContext } from './AppContext';
import { updateEmail, updateFollow, updatePhoneNumber, updateName, updateCo, updateKhop, updateXuong, updateDeKhang } from './Action';
import { getDatabase, ref, child, get, set } from "firebase/database";
import firebaseapp from './FirebaseConfig';

function Page3Form({navigation}) {
    const { state, dispatch } = useContext(ApplicationContext);
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [isValidName, setValidName] = useState(true);
    const [isValidNumber, setValidNumber] = useState(true);
    const verifyName = (Name) => {
        if(!Name) return false;
        return true;
    }

    const verifyNumber = (Number) => {
        if(!Number) return false;
        return true;
        
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [imageSource, setImageSource] = useState(require('../assets/images/uncheck.png'));
    const [isChecked, setisChecked] = useState(true);


    const handlePress = () => {
        if (isChecked) {
          setImageSource(require('../assets/images/checked.png'));
        } else {
          setImageSource(require('../assets/images/uncheck.png'));
        }
        setisChecked(!isChecked);
        dispatch(updateFollow(isChecked));
      };
    const submitCheckForm = () => {
      const isValidName = verifyName(Name);
      const isValidNumber = verifyNumber(Number);
      if(isValidName) {
        setValidName(true);
      } else { 
        setValidName(false);
      }
      if(isValidNumber) {
        setModalVisible(true);
      } else { 
        setValidNumber(false);
      }
    }

    const submitHandlePress = (remove) => {
      dispatch(updateName(Name));
      dispatch(updatePhoneNumber(Number));
      dispatch(updateEmail(Email));
      if (!isChecked){
        dispatch(updateFollow(false));  
      }
      else{
        dispatch(updateFollow(true));  
      }
      const database = getDatabase(firebaseapp);
      const date = new Date();
      const id = date.getFullYear().toString() +
              ((date.getMonth() + 1).toString().padStart(2, "0")) +
              date.getDate().toString().padStart(2, "0") +
              date.getSeconds().toString().padStart(2, "0");
      wid = id;
      wPhoneNumber = state.phoneNumber;
      if (remove === -1) {
        wCo = -1;
        wXuong = -1;
        wKhop = -1;
        wDeKhang = -1;
      }
      else{
        wCo = state.Co;
        wXuong = state.Xuong;
        wKhop = state.Khop;
        wDeKhang = state.DeKhang;
      }
      
      wFollow = state.Follow;
      set(ref(database, 'results/' + wid), {
          name: state.name,
          PhoneNumber : wPhoneNumber,
          Email : state.email,
          Co : wCo,
          Xuong : wXuong,
          Khop: wKhop,
          DeKhang: wDeKhang,
          Follow: wFollow
      })
      .then(() => {
        console.log('Data written successfully!');
      })
      .catch((error) => {
        console.error('Error writing data: ', error);
      });  
      navigation.navigate('Page4')   

    }
    

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
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            <View style={styles.modalView}>
              <Text style={{color: '#478449', fontFamily: 'svnBold', fontSize: 22, paddingTop: 10}}>THÔNG BÁO!</Text>
              <Text style={{color: '#1D1C1C', textAlign: 'center', fontFamily: 'svnGotham', fontSize: 15, padding: 10}}>Bạn có muốn huỷ bỏ kết quả{'\n'}kiểm tra sức khoẻ trước đó không?</Text>
              <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableOpacity
                  style={[styles.buttonContainer, {backgroundColor: 'white', borderColor: '#B70002', borderWidth: 3}]}
                  onPress={() => {submitHandlePress(0);}}
                  >
                  <Text style={[styles.buttonText, {color: '#B70002'}]}>HUỶ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.buttonContainer, {backgroundColor: '#B70002', borderColor: '#B70002', borderWidth: 3}]}
                  onPress={() => {
                    submitHandlePress(-1);
                  }}>
                  <Text style={[{color: 'white'}, styles.buttonText]}>ĐỒNG Ý</Text>
                </TouchableOpacity>
              </View>
            </View>
        </Modal>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={[
            state.KetQua >= 3 ? '#969696' : (state.KetQua >=1) ? '#FD9500' : 'green',
            state.KetQua >= 3 ? '#969696' : (state.KetQua >=1) ? '#FEBF00' : 'green',
            state.KetQua >= 3 ? '#969696' : (state.KetQua >=1) ? '#FB8402' : 'green'
          ]}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, paddingLeft: 20, paddingRight: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flex: 2, alignSelf:'center'}}>
                        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
                        <TouchableOpacity style={{paddingRight: 20}} onPress={() => {navigation.navigate("Page2")}}>
                            <Entypo name="chevron-thin-left" size={24} color="white" />
                        </TouchableOpacity>
                        
                        </View>
                        <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-end', alignSelf:'center'}}>
                        <AntDesign name="left" size={14} color="white" />
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center'}}>  
                        <Text style={[styles.textTop]}>Trang 3/6</Text>          
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
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <View style={styles.inner}>
                        <Image source={require('../assets/images/logo.png')} style={{width: 116.6, height: 28.4, resizeMode: 'contain', alignSelf: 'center'}}></Image>
                        <Text style={{
                          fontFamily: 'svnBold',
                          color: state.KetQua >= 3 ? '#DF1E13' : (state.KetQua >=1) ? '#187B33' : '#ECD24A',
                          fontSize: 15, textAlign: 'center', paddingTop: 15}}>
                            HOÀN THÀNH BÀI KIỂM TRA
                        </Text>
                        <Text style={{
                          fontFamily: 'svnBold',
                          color: state.KetQua >= 3 ? '#DF1E13' : (state.KetQua >=1) ? '#187B33' : '#ECD24A',
                          fontSize: 26, textAlign: 'center'}}>
                            {state.KetQua >= 3 ? 'LƯU Ý MỘT CHÚT' 
                            : (state.KetQua >=1) ? 'LƯU Ý MỘT CHÚT' 
                            : 'XIN CHÚC MỪNG'}
                        </Text>

                        <Text style={{textAlign: 'center', fontFamily: 'svnBold', color: 'white', fontSize: 14, lineHeight: 22, textAlign: 'center', paddingLeft: '5%', paddingRight: '5%'}}>
                          {state.KetQua >= 3 ? 'Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé, bởi sau tuổi 40,...' 
                          : (state.KetQua >=1) ? 'Có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến sức đề kháng hơn nhé...' 
                          : 'Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt.'}
                        </Text>
                        <Text style={{textAlign: 'center', fontFamily: 'svnBold', color: 'white', fontSize: 16, lineHeight: 22, textAlign: 'center', paddingLeft: '7%', paddingRight: '7%'}}>
                          Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text style={[styles.textInput]}>Họ tên:</Text>
                          <Text style={[styles.textInput, {color: state.KetQua >= 3 ? '#ECD24A' : (state.KetQua >=1) ? '#187B33' : '#ECD24A'}]}>*</Text>
                        </View>
                        
                        <TextInput placeholder="Nhập họ và tên" style={[styles.input,
                        {borderColor: state.KetQua >= 3 ? '#ECD24A' : (state.KetQua >=1) ? '#187B33' : '#ECD24A', borderWidth: !isValidName ? 2 : 0}
                        ]}
                        onChangeText={Name => {
                            setName(Name);
                            const isValid = verifyName(Name);
                            isValid? setValidName(true) : setValidName(false);
                        }}/>
                        <Text style={[styles.textInputError, {color: state.KetQua >= 3 ? '#ECD24A' : (state.KetQua >=1) ? '#187B33' : '#ECD24A'}]}>{isValidName? '' : 'Vui lòng nhập họ và tên'}</Text>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                          <Text style={[styles.textInput]}>Số điện thoại:</Text>
                          <Text style={[styles.textInput, {color: state.KetQua >= 3 ? '#ECD24A' : (state.KetQua >=1) ? '#187B33' : '#ECD24A'}]}>*</Text>
                        </View>
                        <TextInput placeholder="Nhập số điện thoại" style={[styles.input,
                        {borderColor: state.KetQua >= 3 ? '#ECD24A' : (state.KetQua >=1) ? '#187B33' : '#ECD24A', borderWidth: !isValidNumber ? 2 : 0}
                        ]} inputMode="numeric"
                        onChangeText={Number => {
                            setNumber(Number);
                            const isValid = verifyNumber(Number);
                            isValid? setValidNumber(true) : setValidNumber(false);
                        }}/>
                        <Text style={[styles.textInputError, {color: state.KetQua >= 3 ? '#ECD24A' : (state.KetQua >=1) ? '#187B33' : '#ECD24A'}]}>{isValidNumber? '' : 'Vui lòng nhập số điện thoại'}</Text>
                        <Text style={styles.textInput}>Email:</Text>
                        <TextInput placeholder="Nhập email" style={styles.input} 
                        onChangeText={Email => {
                          setEmail(Email);
                        }
                        }/>
                        <Text style={styles.textInputError}></Text>
                        <Pressable onPress={() => handlePress()}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={imageSource}></Image>
                                <View style={{flexShrink: 1}}>
                                    <Text style={{color: 'white', fontFamily: 'svnGotham', fontSize: 12}}>Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào</Text>
                                    
                                </View>
                                
                            </View>
                        </Pressable>
                        <Text style={{color: 'white', fontFamily: 'svnLightItalic', fontSize: 12}}>Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của mình để xử lý dựa trên chính sách bảo mật của Anlene</Text>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <TouchableOpacity 
                            style=
                              {[styles.buttonContainer1, styles.shadow,
                              {backgroundColor: Name && Number? '#B70002' : '#B8B8B8' }]} 
                            onPress={()=> {submitCheckForm()}}>
                                <Text style={[styles.buttonText1]}>HOÀN THÀNH</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </KeyboardAvoidingView>            

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
    fontSize: 14,
  },
  inner: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 3,
    borderRadius: 24,
    width: '40%',
  },
  buttonContainer1: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 3,
    borderRadius: 24,
    width: '70%',
  },
  buttonText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 18,
    paddingLeft: 22, paddingRight: 22,
    paddingTop:4, paddingBottom:4
  },
  buttonText1: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'svnGotham',
    fontSize: 28,
    color: 'white',
    paddingLeft: 22, paddingRight: 22,
    paddingTop:4, paddingBottom:4
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
  

});



export default Page3Form;