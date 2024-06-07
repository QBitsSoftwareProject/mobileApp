import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import styles from "./AllAuthorScreenStyles";

// navigation
import { useNavigation } from "@react-navigation/native";

// Author cards
import AuthorCard from "./AuthorCard";
// Author cards

// Author details
import Authors from "../Authors";
// Author details

const AllAuthorScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      {/* HeaderSub */}
      <View style={styles.HeaderSub}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 30,
            paddingVertical: 50,
            alignItems: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require("../../../../assets/images/BackWhite.png")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 23, color: "white", fontWeight: "500" }}>
            Authors
          </Text>
        </View>
      </View>
      {/* HeaderSub */}
      <FlatList
        data={[{ key: "unique-key" }]}
        renderItem={() => {
          return (
            <View>
              {/* Author Descriptions Card section */}
              <View
                style={{
                  paddingVertical: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 220,
                }}
              >
                {Authors.map((item, index) => {
                  return <AuthorCard key={index} item={item} />;
                })}
              </View>
              {/* Author Descriptions Card section */}
            </View>
          );
        }}
      />
      {/* HeaderSub */}
    </SafeAreaView>
  );
};

export default AllAuthorScreen;
