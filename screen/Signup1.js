import React from "react";
import Background from "./Background";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";

const Signup1 = ({ navigation }) => {
  return (
    <Background>
      <ImageBackground
        source={require('./media/Signup1.png')}
        style={{
          flex: 1,
          height: 260,
          width: 370,
          justifyContent: 'center',
          alignItems: "center",
          marginTop: 70
        }}
      />

      <ImageBackground
        source={require('./media/S1content.png')}
        style={{
          flex: 1,
          height: 170,
          width: 370,
          justifyContent: 'center',
          alignItems: "center",
          marginTop: 100
        }}
      />

      <View style={{ marginBottom: 0 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#304FFE",
            borderRadius: 50,
            height: 57,
            width: 363,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            console.log("Next button pressed");
            navigation.navigate('Code');
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 50,
            height: 57,
            width: 363,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            borderWidth: 2,
            borderColor: '#304FFE',
          }}
          onPress={() => {
            console.log("Log In button pressed");
            navigation.navigate('Code');
          }}
        >
          <Text style={{ color: "#304FFE", fontSize: 20, fontWeight: "bold" }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>

   
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: -50
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            width: 300,
            fontSize: 15,
            fontWeight: '300'
          }}
        >
          By continuing you accept our
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#304FFE'
            }}
            onPress={() => { navigation.navigate('HomePage'); }}
          >{'\n'}
            Terms of Service
          </Text>
          {' and '}
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#304FFE'
            }}
            onPress={() => { navigation.navigate('HomePage'); }}>Privacy Policy</Text>
        </Text>
      </View>
    </Background>
  );
};

export default Signup1;

