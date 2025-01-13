import React, { useEffect } from "react";
import { View,ImageBackground } from "react-native";

const HomePage=({navigation})=>{
    useEffect(() => {
        const timer = setTimeout(() => {
          
          navigation.navigate("Slider");
        }, 3000);
    
        return () => clearTimeout(timer); // Cleanup timeout on unmount
      }, [navigation]);


return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground 
       
        source={require('./media/HomePage.png')}   style=
      {{height:'115%',
      position:'absolute',
      width:'100%',
      marginLeft:-10,
      marginBottom:0}}></ImageBackground>
        </View>
);
}

export default HomePage;