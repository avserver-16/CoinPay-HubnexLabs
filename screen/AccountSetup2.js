import React, { useState } from "react";
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Background from "./Background";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AccountSetup2 = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setDob(formattedDate);
    hideDatePicker();
  };

  return (
    <Background>
      {/* Image background at the top */}
      <ImageBackground
        source={require('./media/personal.png')}
        style={styles.imageBackground}
      />
      
      {/* Full Name */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Mr.Raghav'
        placeholderTextColor="#888"
      />
      
      {/* Username */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder='@username'
        placeholderTextColor="#888"
      />
      
      {/* Date of Birth */}
      <Text style={styles.label}>D.O.B</Text>
      <TextInput
        style={styles.input}
        placeholder='C@lendar'
        placeholderTextColor="#888"
        value={dob}
        onFocus={showDatePicker}
      />
      
      {/* Continue Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Continue button pressed");
          navigation.navigate('Checking'); // Navigate as required
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: 120,
    width: 390,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 100,
  },
  label: {
    color: 'black',
    fontSize: 20,
    //marginLeft: 20,
    marginTop: 50,
    marginLeft:-270,
    marginBottom:10
  },
  input: {
    backgroundColor: "white",
    width: 370,
    height: 40,
    textAlign: "left",
    marginBottom: 18,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    marginLeft: 0,
    paddingLeft:10
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
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AccountSetup2;
