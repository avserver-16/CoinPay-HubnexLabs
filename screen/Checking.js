import React from "react";
import Background from "./Background";
import { ImageBackground } from "react-native";
import { useEffect } from "react";

const Checking=({navigation})=>{
    useEffect(() => {
            const timer = setTimeout(() => {
              
              navigation.navigate("FaceIdentification");
            }, 1000);
        
            return () => clearTimeout(timer); // Cleanup timeout on unmount
          }, [navigation]);
    return(
        <Background>
    <ImageBackground source={require('./media/Checking.png')}
    style={{flex: 1,
        height: 250,
        width: 270,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 70}}>

    </ImageBackground>
      <ImageBackground source={require('./media/Setup.png')}
      style={{flex: 1,
          height: 350,
          width: 300,
          justifyContent: 'center',
          alignItems: "center",
          marginTop: -150}}>
  
      </ImageBackground></Background>
   
);
}

export default Checking;