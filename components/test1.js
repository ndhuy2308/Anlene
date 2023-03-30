import react from "react";
import { Text, View, Pressable,StyleSheet, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Images from "../assets/images";

function Test221(){
  const [index, setIndex] = useState(0);
  if (index === 0){
    return (
      <SafeAreaView>
        <Image style={{width: '100%', height: 200}} source={Images.imageKhop} />
      </SafeAreaView>
    );
  };

};



const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'skyblue'
 },
 textProgess: {
  textAlign: 'center',
  color: 'white',
  fontSize: 16
 }
});

export default Test221;