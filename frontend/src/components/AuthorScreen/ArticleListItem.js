import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./ListItemStyles";

import profilePic2 from "../../assets/images/profilePics/img5.jpg";
import viewIcon from "../../assets/images/icons/bi_eye-fill.png";

const ArticleListItem = () => {
  return (
    <View style={styles.articleListItem}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          source={profilePic2}
          style={{
            borderRadius: 100,
            height: 64,
            width: 64,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontSize: 12 }}>MINDFULLNESS MEDITATION</Text>
        <Text style={{ fontSize: 9 }}>BY DINUL PERERA</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <View style={styles.readMoreBtn}>
          <Image source={viewIcon} />
          <Text style={{ color: "white", fontSize: 11 }}>READ MORE</Text>
        </View>
      </View>
    </View>
  );
};

export default ArticleListItem;
