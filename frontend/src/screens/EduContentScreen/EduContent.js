import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React from "react";
import styles from "../EduContentScreen/AllContent/style";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import SearchBarComponent from "../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../components/SearchAndCategories/SearchAndCategories";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import Audios from "../../components/AudioList/Audios";
// components

const EduContent = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <FlatList
          data={[{ key: "unique-key" }]}
          renderItem={() => {
            return (
              <View style={{marginBottom:90}}>
                <View style={{ zIndex: 100 }}>
                  {/* search and categories */}
                  <SearchBarComponent />
                  <SearchAndCategories currentView={"HomeScreen"} />
                  {/* search and categories */}
                </View>
                <SafeAreaView>
                  <Text style={styles.mainHeading}>Featured Resurces</Text>
                  <View>
                    <Carousel />
                  </View>
                  <Text style={styles.mainHeading2}>Read articles about</Text>
                  <View>
                    <Categories />
                  </View>
                  <Text style={[styles.mainHeading2, { marginTop: 40 }]}>
                    Follow Along
                  </Text>
                  <View>
                    <Audios />
                  </View>
                </SafeAreaView>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EduContent;
