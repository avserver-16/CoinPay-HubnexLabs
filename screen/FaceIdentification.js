import React from "react";
import { View,TouchableOpacity,Text,ImageBackground,Icon } from "react-native";
import Background from "./Background";
import { Feather } from "@expo/vector-icons";



const FaceIdentification=({navigation})=>{
    return(<Background>
        <ImageBackground source={require('./media/Fi.png')}
            style={{flex: 1,
                height: 230,
                width: 260,
                justifyContent: 'center',
                alignItems: "center",
                marginTop: 100}}>
        
            </ImageBackground>
              <ImageBackground source={require('./media/Fi1.png')}
              style={{flex: 1,
                  height: 200,
                  width: 350,
                  justifyContent: 'center',
                  alignItems: "center",
                  marginTop: 50}}>
          
              </ImageBackground>
        <TouchableOpacity style={{backgroundColor:'#304FFE',height:80,width:80,justifyContent:'center',alignItems:'center',borderRadius:50,marginBottom:80}} onPress={()=>{navigation.navigate('Scan')}}>
            <Feather name='camera' size={40} color={'white'} ></Feather>

        </TouchableOpacity>
        <Text>

        </Text>
    </Background>)
}

export default FaceIdentification;