import React from "react";
import { ImageBackground, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Background from "./Background";

const Code1 = ({ navigation }) => {
  return (
    <Background>
      <View style={{ flex: 1 ,backgroundColor:'rgba(5, 0, 0, 0.5)'}}>
        {/* ImageBackground with Overlay */}
        <ImageBackground
          source={require('./media/Verification.png')}
          style={styles.imageBackground}
        >
          {/* Transparent Overlay */}
          <View style={styles.overlay} />
        </ImageBackground>

        {/* Button Section */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("Verify your number button pressed");
            navigation.navigate('Code1');
          }}
        >
          <Text style={styles.buttonText}>
            Verify your number
          </Text>
        </TouchableOpacity>
        <View style={{height:500,width:370,backgroundColor:'white',marginLeft:15,marginTop:-600,borderRadius:30}}>
<ImageBackground source={require('./media/Code1.png')}  style={{ height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 30,
    marginLeft:30}}></ImageBackground>
    <View style={{ marginBottom: 0 }}>
            <TouchableOpacity
              style={{
                marginTop:25,
                backgroundColor: "#304FFE",
                borderRadius: 50,
                height: 57,
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:35
              }}
              onPress={() => {
                console.log("Next button pressed");
                navigation.navigate('CreateAcc');
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                Yes
              </Text>
            </TouchableOpacity>
    
            <TouchableOpacity
              style={{
                marginLeft:35,
                backgroundColor: "white",
                borderRadius: 50,
                height: 57,
                width: 300,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                borderWidth: 2,
                borderColor: '#304FFE',
              }}
              onPress={() => {
                console.log("Log In button pressed");
                navigation.navigate('CreateAcc');
              }}
            >
              <Text style={{ color: "#304FFE", fontSize: 20, fontWeight: "bold" }}>
                No
              </Text>
            </TouchableOpacity>
          </View>
      </View>
      </View>
      
    </Background>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 200,
    width: 400,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 90,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  },
  button: {
    
    backgroundColor: "#304FFE,rgba(5, 0, 0, 0.1)",
    borderRadius: 50,
    height: 57,
    width: 363,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:450,
    alignSelf: 'center', // Centers the button horizontally
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Code1;

