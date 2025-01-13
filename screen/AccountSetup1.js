import React from "react";
import { View,ImageBackground,Text,TextInput,TouchableOpacity } from "react-native";
import Background from "./Background";
const AccountSetup1=({navigation})=>{
    return(<Background>
          <ImageBackground
                source={require('./media/Email.png')}
                style={{
                  flex: 1,
                  height: 100,
                  width: 390,
                  justifyContent: 'center',
                  alignItems: "center",
                  marginTop: 220
                }}
              />
              <Text style={{color:'black',fontSize:20,marginLeft:-310,marginBottom:10,paddingLeft:20}} >Email</Text>
                          <TextInput
                            style={{ backgroundColor: "white",
                              width: 370,
                              height: 50,
                              color: "white",
                              textAlign:'left',
                              justifyContent:'center',
                              alignItems:'center',
                              marginBottom: 300,
                              borderWidth:2,
                              borderRadius:10,
                              borderColor:'grey',
                              marginLeft:0,
                              fontSize:20,
                              paddingLeft:20,
                              marginTop:0}}
                            placeholder='Email'
                            placeholderTextColor="#bfbfbf"
                            
                          />

                          <TouchableOpacity
                                        style={{
                                          backgroundColor: "#304FFE",
                                          borderRadius: 50,
                                          height: 57,
                                          width: 363,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          marginBottom:50,
                                       
                                          
                                        }}
                                        onPress={() => {
                                          console.log("Log In button pressed");
                                          navigation.navigate('AccountSetup2');
                                        }}
                                      >
                                        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                                          Continue
                                        </Text>
                                      </TouchableOpacity>
    </Background>);
}

export default AccountSetup1;