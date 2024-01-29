import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import styles from "../articleStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
// components

const AuthorScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{ zIndex: 100, marginTop: 40 }}>
          {/* search and categories */}
          <SearchBarComponent />
          {/* search and categories */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthorScreen;
