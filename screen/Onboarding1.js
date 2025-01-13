import React from "react";
import Background from "./Background";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";

const Onboarding1 = ({navigation}) => {
  return (
    <Background>
      <View
        style={{
          flex: 1,
          justifyContent:'center',
          alignItems: "center",
         // backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
      >
        {/* Image Section */}
        <ImageBackground
          source={require("./media/Onboarding1.png")}
          style={{
            flex: 1,
            height: 650, 
            width: 370,
            justifyContent:'center',
            alignItems: "center",
            marginTop:140
          }}
         
        />

        {/* Button Section */}
        <TouchableOpacity
          style={{
            backgroundColor: "#304FFE",
           // backgroundColor:'black',
            borderRadius: 50,
            marginBottom: 66,
            height:57,
            width:363,
            alignItems:'center',
            justifyContent:'center'
          }}
          onPress={() => {
            console.log("Next button pressed");
            navigation.navigate('Onboarding2');
            // Navigate to the next screen here if using a navigation library
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Onboarding1;
