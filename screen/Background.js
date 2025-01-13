import React from "react";
import { View } from "react-native";

const Background = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      {children}
    </View>
  );
};

export default Background;
