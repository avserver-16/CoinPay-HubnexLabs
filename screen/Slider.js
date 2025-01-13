import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Onboarding1 from "./Onboarding1";


const Tab = createBottomTabNavigator();

const Slider = () => {
  return (
    <Tab.Navigator
      initialRouteName="Onboarding1"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
         
      
        },
        tabBarActiveTintColor: "#304FFE",
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.9)",
        tabBarActiveBackgroundColor:'#304FFE',
        tabBarStyle: {
          position: "absolute",
          height: 12,  // Increased height
          backgroundColor: "rgb(235, 235, 235)",
          borderRadius: 20,
          marginHorizontal: 90,
          marginBottom: 355, // Increased bottom margin
          elevation:0,
          borderWidth:0
        },
       
      })}
    >
      <Tab.Screen name="Onboarding1" component={Onboarding1} />
      <Tab.Screen name="Onboarding2" component={Onboarding2} />
      <Tab.Screen name="Onboarding3" component={Onboarding3} />
    </Tab.Navigator>
  );
};

export default Slider;