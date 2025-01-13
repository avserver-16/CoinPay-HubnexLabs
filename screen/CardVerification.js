import React, { useRef, useState } from "react";
import Background from "./Background";
import { TextInput, View, StyleSheet, ImageBackground ,TouchableOpacity} from "react-native";
import { Feather } from "@expo/vector-icons";

const CardVerification = ({ navigation }) => {
  const [passcode, setPasscode] = useState(["", "", "", "","",""]); // Array to hold each digit
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef(null)); // Create refs for each TextInput

  const handlePassChange = (text, index) => {
    const updatedPasscode = [...passcode];
    updatedPasscode[index] = text;
    setPasscode(updatedPasscode);

    // Automatically move to the next input if a character is entered
    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputRefs[index - 1].current.focus(); // Focus previous input on backspace
    }
  };

  return (
    <Background>
        <ImageBackground source={require('./media/CardVerification.png')}
                    style={{flex: 1,
                        height: 90,
                        width: 400,
                        justifyContent: 'center',
                        alignItems: "center",
                        marginLeft:0,
                        marginTop: 250}}></ImageBackground>
      <View style={styles.container}>
        {passcode.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handlePassChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(digit, index);
              }
            }}
            keyboardType="numeric"
            maxLength={1} // Allow only one character
          />
        ))}
      </View>
      <TouchableOpacity 
        onPress={()=>{
          console.log('Printer pressed');
          navigation.navigate('Tabs')}} 
        style={{
          backgroundColor:'#304FFE',height:80,width:80,justifyContent:'center',alignItems:'center',borderRadius:50,marginBottom:250}}>
            <Feather name='arrow-right' size={40} color={'white'} ></Feather></TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical:300
  },
  input: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 15,
    borderWidth:2,
    borderColor:'grey',
  },
});

export default CardVerification;
