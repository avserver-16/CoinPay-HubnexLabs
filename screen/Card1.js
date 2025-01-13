import React from "react";
import Background from "./Background";
import { ImageBackground,TouchableOpacity,Text, View } from "react-native";

const Card1=({navigation})=>{
    return(<Background><View style={{backgroundColor:'#f7f7f7',width:'100%',height:'100%'}}>
                        <ImageBackground source={require('./media/Card1s.png')}
            style={{flex: 1,
                height: 203,
                width: 350,
                justifyContent: 'center',
                alignItems: "center",
                marginTop: 120,
                marginLeft:20}}>
        
            </ImageBackground>
              <ImageBackground source={require('./media/Card1.png')}
              style={{flex: 1,
                  height: 140,
                  width: 380,
                  alignItems: "center",
                  marginTop: 50,}}>
          
              </ImageBackground>
      <TouchableOpacity
                style={{
                  backgroundColor: "#304FFE",
                  borderRadius: 50,
                  height: 57,
                  width: 363,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom:50,
                  marginLeft:15
                }}
                onPress={() => {
                  console.log("Next button pressed");
                  navigation.navigate('Card2');
                }}
              >
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                  + Add a Card
                </Text>
              </TouchableOpacity>
              </View>
    </Background>);
}

export default Card1;