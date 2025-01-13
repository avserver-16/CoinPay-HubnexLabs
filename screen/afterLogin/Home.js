import React from "react";
import { View, Text,TextInput, TouchableOpacity } from "react-native";
import Background from "../Background";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  return (
<Background>
    <View style={{backgroundColor:'#304FFE',height:'50%',width:'100%',marginTop:'-130%'}}>
        <TouchableOpacity><Feather name="star" size={30} color={'white'} style={{paddingLeft:20,paddingTop:110}} ></Feather></TouchableOpacity>
        <TextInput style={{backgroundColor:'rgba(255, 255, 255, 0.26)',width:'60%',height:60,marginLeft:'20%',marginTop:'-12%',borderRadius:30,paddingLeft:50,fontSize:18,color:'white'}} placeholder="Search  ''Payments''" placeholderTextColor={'white'}>
        </TextInput>
        <Feather name="search" size={25} color={'white'} style={{paddingLeft:85,marginTop:-43}} ></Feather>
        <Feather name="bell" size={30} color={'white'} style={{paddingLeft:'85%',marginTop:-25}} ></Feather>
        <Text style={{color:'white',paddingLeft:'42%',fontSize:17.5,marginTop:40,fontWeight:100}} >US Dollar </Text>
        <Text style={{color:'white',paddingLeft:'37%',fontSize:30,marginTop:10,fontWeight:900}} >$20,000 </Text>
        <Text style={{color:'white',paddingLeft:'40%',fontSize:12,marginTop:0,fontWeight:100}} >Available balance</Text>
        <TouchableOpacity style={{backgroundColor:'#304FFE',height:70,width:'40%',marginLeft:'31%',borderRadius:50,marginTop:20,borderWidth:2,borderColor:'white'}} >
          <Feather name="book" size={20} style={{paddingLeft:10,marginTop:23}} color={'white'}/>
          <Text  style={{fontSize:20,marginLeft:40,marginTop:-25,color:'white'}} >Add Money</Text>
        </TouchableOpacity>

        <View style={{width: '90%', height: 100, backgroundColor: 'white', marginLeft: '5%', marginTop: 20, borderRadius: 15, elevation: 10, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
  <TouchableOpacity>
    <Feather name="arrow-up" size={40} color={'blue'} />
    <Text style= {{color:'blue',fontWeight:300}}>Send</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Feather name="arrow-down" size={40} color={'orange'} />
    <Text style= {{color:'orange',fontWeight:300}}>Request</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Feather name="square" size={40} color={'red'} />
    <Text style= {{color:'red',fontWeight:300,marginLeft:5}}>Bank</Text>
  </TouchableOpacity>
</View>
<Text style={{fontSize:20,fontWeight:200,marginLeft:20,marginTop:20}}>Transactions</Text>
<TouchableOpacity><Feather name="arrow-right" style={{paddingLeft:350,marginTop:-25}} size={25} ></Feather></TouchableOpacity>
<View style={{backgroundColor:'rgba(71, 71, 71, 0.11)',height:250,width:'90%',marginLeft:'5%',marginTop:15,borderRadius:20}} ></View>
    </View>
</Background>
      
  
  );
};


export default Home;
