import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "./afterLogin/Home";
import Progress from "./afterLogin/Progress";
import Profile from "./afterLogin/Profile";
import Quote from "./afterLogin/Quote";
import Scanner from "./afterLogin/Scanner";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          const icons = {
            Home: "home",
            Progress: 'pie-chart',
            Scanner: "camera",
            Quote: "message-circle", // Correct icon name for quote
            Profile: "user",
          };
          return <Feather name={icons[route.name]} size={25} color={color} style={{marginTop:10,marginBottom:-20}}/>;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.7)",
        tabBarActiveBackgroundColor:'#304FFE',
        tabBarStyle: {
          position: "absolute",
          height: 70,  // Increased height
          backgroundColor: "white",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 10, // Increased bottom margin
          
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="Quote" component={Quote} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;

