import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const ButtonGroup = ({ tab1, tab2, tab3, select }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View
      style={{
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 25,
        flexDirection: "row",
        alignSelf: "center",

        marginTop: 32,
      }}
    >
      <TouchableOpacity
        style={{
          width: 113.5,
          height: 40,
          backgroundColor: selectedTab == 0 ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setSelectedTab(0);
          select(0);
        }}
      >
        <Text
          style={{
            color: selectedTab == 0 ? "#fff" : "#5C677D",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {tab1}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 113.5,
          height: 40,
          backgroundColor: selectedTab == 1 ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setSelectedTab(1);
          select(1);
        }}
      >
        <Text
          style={{
            color: selectedTab == 1 ? "#fff" : "#5C677D",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {tab2}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 113.5,
          height: 40,
          backgroundColor: selectedTab == 2 ? "#5296C5" : "#fff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          setSelectedTab(2);
          select(2);
        }}
      >
        <Text
          style={{
            color: selectedTab == 2 ? "#fff" : "#5C677D",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {tab3}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGroup;
