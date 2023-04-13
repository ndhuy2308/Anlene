import React, { useEffect, useContext } from "react";
import { Text, View, SafeAreaView } from 'react-native';
import firebaseapp from "./FirebaseConfig";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { ApplicationContext } from "./AppContext";

function Test227({navigation}){
  const { state, dispatch } = useContext(ApplicationContext);
  const database = getDatabase(firebaseapp);

    useEffect(() => {
      wid = state.id;
      wName = state.name;
      wPhoneNumber = state.phoneNumber;
      wEmail = state.email;
      wCo = state.Co;
      wXuong = state.Xuong;
      wKhop = state.Khop;
      wDeKhang = state.DeKhang;
      set(ref(database, 'results/' + wid), {
          name: wName,
          PhoneNumber : wPhoneNumber,
          Email : wEmail,
          Co : wCo,
          Xuong : wXuong,
          Khop: wKhop,
          DeKhang: wDeKhang
      })
      .then(() => {
        console.log('Data written successfully!');
      })
      .catch((error) => {
        console.error('Error writing data: ', error);
      });     
    }, []);   
    
    
      
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Thêm dữ liệu</Text>
        </SafeAreaView>
    )
};

export default Test227;