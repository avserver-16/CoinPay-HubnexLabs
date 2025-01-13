import React from "react";
import Background from "./Background";
import { View,ImageBackground,TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
 const Scan=({navigation})=>{
return(
    <Background>
                <ImageBackground source={require('./media/Scan.png')}
            style={{flex: 1,
                height: 230,
                width: 260,
                justifyContent: 'center',
                alignItems: "center",
                marginTop: 100}}>
        
            </ImageBackground>
              <ImageBackground source={require('./media/Scan1.png')}
              style={{flex: 1,
                  height: 170,
                  width: 350,
                  justifyContent: 'center',
                  alignItems: "center",
                  marginTop: 50}}>
          
              </ImageBackground>
        <TouchableOpacity 
        onPress={()=>{console.log('Printer pressed');navigation.navigate('Pass')}} 
        style={{backgroundColor:'#304FFE',height:80,width:80,justifyContent:'center',alignItems:'center',borderRadius:50,marginBottom:80}}>
            <Feather name='printer' size={40} color={'white'} ></Feather></TouchableOpacity>
    </Background>
);
 }

 export default Scan;