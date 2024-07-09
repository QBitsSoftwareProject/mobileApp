import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonGroup = ({ tab1, tab2, tab3, select, change }) => {
  return (
    <View
      style={{
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 25,
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: 113.5,
          height: 40,
          backgroundColor: change === 0 ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => select(0)}
      >
        <Text
          style={{
            color: change === 0 ? "#fff" : "#5C677D",
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {tab1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 113.5,
          height: 40,
          backgroundColor: change === 1 ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => select(1)}
      >
        <Text
          style={{
            color: change === 1 ? "#fff" : "#5C677D",
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {tab2}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 113.5,
          height: 40,
          backgroundColor: change === 2 ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => select(2)}
      >
        <Text
          style={{
            color: change === 2 ? "#fff" : "#5C677D",
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {tab3}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGroup;
