import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./videoStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
// components

import defaultImg from "../../../assets/images/videoThumbnails/meditation1.png";

const VideoContent = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={{ zIndex: 100, marginTop: 40 }}>
            {/* search and categories */}
            <SearchBarComponent />
            <SearchAndCategories currentView={"VideoScreen"} />
            {/* search and categories */}
          </View>
          {/* video list */}
          <View style={styles.VideoList}>
            {/* video item */}
            <View style={styles.VideoItem}>
              <View style={{ position: "relative", display: "flex" }}>
                <Pressable style={styles.playBtn}></Pressable>
                <Image
                  source={defaultImg}
                  style={{
                    width: "100%",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    position: "absolute",
                  }}
                />
              </View>
              <View style={styles.VideoItemDetails}>
                <View style={styles.details1}>
                  <Text style={{ fontWeight: "bold" }}>
                    BREATHING MEDITATION
                  </Text>
                </View>
                <View style={styles.details2}>
                  <Text style={{ fontWeight: "bold" }}>10:15</Text>
                </View>
              </View>
            </View>
            {/* video item */}
          </View>
          {/* video list */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VideoContent;
