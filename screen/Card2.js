import React, { useState } from "react";
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Background from "./Background";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Card2 = ({ navigation }) => {
  

  return (
    <Background><View style={{backgroundColor:'#f7f7f7',width:'100%',height:'100%'}}>
      {/* Image background at the top */}
      <ImageBackground
        source={require('./media/Card2.png')}
        style={styles.imageBackground}
      />
      
      {/* Full Name */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Account Holder name...'
        placeholderTextColor="#888"
      />
      
      {/* Username */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder='Email...'
        placeholderTextColor="#888"
      />
      
      {/* Date of Birth */}
      <Text style={styles.label}>D.O.B</Text>
      <TextInput
        style={styles.input}
        placeholder='1234 5678 9101 2345  MM/YY     CVV'
        placeholderTextColor="#888"
      
      />
      
      {/* Continue Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Continue button pressed");
          navigation.navigate('CardVerification'); // Navigate as required
        }}
      >
        <Text style={styles.buttonText}>Add my Card</Text>
      </TouchableOpacity>

      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: 120,
    width: 430,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 100,
    marginLeft:0
  },
  label: {

    fontSize: 20,
    //marginLeft: 20,
    marginTop: 50,
    marginLeft:-270,
    marginBottom:10
  },
  input: {
    paddingLeft:20,
    backgroundColor: "#f7f7f7",
    width: 370,
    height: 50,
    textAlign: "left",
    marginBottom: 0,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#304FFE",
    borderRadius: 50,
    height: 57,
    width: 363,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 70,
    marginLeft:15
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Card2;