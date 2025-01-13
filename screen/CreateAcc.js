import React, { useState } from "react";
import { ImageBackground, TextInput, View, KeyboardAvoidingView, ScrollView, Platform, StyleSheet,Text ,TouchableOpacity} from "react-native";
import Background from "./Background";
import { Feather } from "@expo/vector-icons";


const CreateAcc = ({ navigation }) => {
  const [pass,setPass]=useState('');
  const [seeCheck,setSeeCheck]=useState(true);
const handlePass=(text)=>{
setPass(text);
}

const check=()=>{
  if(seeCheck===true){setSeeCheck(false);}
  else{setSeeCheck(true);}
}


  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Image Section */}
          <ImageBackground
            source={require('./media/CreateAcc.png')}
            style={styles.imageBackground}
          />

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.smallInput}
              placeholder="Code"
              placeholderTextColor="#bfbfbf"
              keyboardType='decimal-pad'
              
            >+91</TextInput>
            <TextInput
              style={styles.largeInput}
              placeholder="Phone number"
              placeholderTextColor="#bfbfbf"
              textContentType='telephoneNumber'
              keyboardType='decimal-pad'
            />
            <Text style={{color:'black',fontSize:18,marginLeft:-280,marginTop:30,marginBottom:20}} >Password</Text>
            <TextInput
              style={{ backgroundColor: "white",
                width: 370,
                height: 50,
                color: "black",
                textAlign: "left",
                marginBottom: 10,
                borderWidth:2,
                borderRadius:10,
                borderColor:'grey',
                marginLeft:0,
                paddingLeft:20,
                marginTop:0}}
              placeholder="Password"
              placeholderTextColor="#bfbfbf"
              onChangeText={handlePass}
              value={pass}
              secureTextEntry={seeCheck}
            ></TextInput><TouchableOpacity style={{backgroundColor:'white',height:30,width:30,marginLeft:'77%',marginTop:-50,color:'grey',justifyContent:'center',alignItems:'center'}} onPress={check}><Feather name='eye' color={'grey'} size={30}></Feather></TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
                  navigation.navigate('AccountSetup1');
                  // Navigate to the next screen here if using a navigation library
                }}
              >
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    height: 120,
    width: 380,
    justifyContent: "center",
    alignItems: "center",
    marginTop:0,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  smallInput: {
    backgroundColor: "white",
    width: 100,
    height: 50,
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    borderWidth:2,
    borderRadius:10,
    borderColor:'grey',
    marginLeft:-270,
    paddingLeft:35
  },
  largeInput: {
    backgroundColor: "white",
    width: 260,
    height: 50,
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    borderWidth:2,
    borderRadius:10,
    borderColor:'grey',
    marginLeft:100,
    marginTop:-60,
    paddingLeft:20

  },
});

export default CreateAcc;
