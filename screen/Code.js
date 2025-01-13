import React from "react";
import { ImageBackground, TouchableOpacity, Text } from "react-native";
import Background from "./Background";

const Code = ({ navigation }) => {
  return (
    <Background>
      <ImageBackground
        source={require('./media/Verification.png')}
        style={{
          flex: 1,
          height: 200,
          width: 400,
          justifyContent: 'center',
          alignItems: "center",
          marginTop: 80,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#304FFE",
          borderRadius: 50,
          height: 57,
          width: 363,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 50,
        }}
        onPress={() => {
          console.log("Log In button pressed");
          navigation.navigate('Code1');
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Verify your number
        </Text>
      </TouchableOpacity>
    </Background>
  );
};

export default Code;
