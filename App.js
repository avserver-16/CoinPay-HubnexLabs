import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing screen components
import HomePage from './screen/HomePage';
import Onboarding1 from './screen/Onboarding1';
import Onboarding2 from './screen/Onboarding2';
import Onboarding3 from './screen/Onboarding3';
import Signup1 from './screen/Signup1';
import Code from './screen/Code';
import Code1 from './screen/Code1';
import CreateAcc from './screen/CreateAcc';
import AccountSetup1 from './screen/AccountSetup1';
import AccountSetup2 from './screen/AccountSetup2';
import Checking from './screen/Checking';
import FaceIdentification from './screen/FaceIdentification';
import Scan from './screen/Scan';
import Pass from './screen/Pass';
import Welcome from './screen/Welcome';
import Login from './screen/Login';
import Card1 from './screen/Card1';
import Card2 from './screen/Card2';
import CardVerification from './screen/CardVerification';
import Tabs from './screen/Tabs';
import Home from './screen/afterLogin/Home';
import Progress from './screen/afterLogin/Progress';
import Scanner from './screen/afterLogin/Scanner';
import Quote from './screen/afterLogin/Quote';
import Profile from './screen/afterLogin/Profile';
import Slider from './screen/Slider';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        {/* HomePage */}
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        
        {/* Onboarding Screens */}
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{ headerShown: false }}
        />
        
        {/* Signup & Code Screens */}
        <Stack.Screen
          name="Signup1"
          component={Signup1}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Code"
          component={Code}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Code1"
          component={Code1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAcc"
          component={CreateAcc}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountSetup1"
          component={AccountSetup1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountSetup2"
          component={AccountSetup2}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Checking"
          component={Checking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FaceIdentification"
          component={FaceIdentification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pass"
          component={Pass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Card1"
          component={Card1}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="Card2"
          component={Card2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardVerification"
          component={CardVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quote"
          component={Quote}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


