import React from "react";
import Background from "./Background";
import { ImageBackground,TouchableOpacity,Text } from "react-native";

const Welcome=({navigation})=>{
    return(<Background>
                        <ImageBackground source={require('./media/Welcome.png')}
            style={{flex: 1,
                height: 230,
                width: 260,
                justifyContent: 'center',
                alignItems: "center",
                marginTop: 100}}>
        
            </ImageBackground>
              <ImageBackground source={require('./media/Welcome1.png')}
              style={{flex: 1,
                  height: 140,
                  width: 380,
                  justifyContent: 'center',
                  alignItems: "center",
                  marginTop: 50}}>
          
              </ImageBackground>
      <TouchableOpacity
                style={{
                  backgroundColor: "#304FFE",
                  borderRadius: 50,
                  height: 57,
                  width: 363,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom:50
                }}
                onPress={() => {
                  console.log("Next button pressed");
                  navigation.navigate('Login');
                }}
              >
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                  Continue
                </Text>
              </TouchableOpacity>
    </Background>);
}

export default Welcome;