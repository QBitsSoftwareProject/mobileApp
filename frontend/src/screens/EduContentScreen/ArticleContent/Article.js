import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./articleStyle";

const Article = ({ item }) => {
  return (
    <View style={styles.article}>
      <View>
        <Image
          source={item.thumbnail_loc}
          style={{ width: "100%", height: "100%", borderRadius: 7 }}
        />
      </View>
      <View style={[styles.articleDetails,{}]}>
        <View>
          <Image source={item.author_profile} style={{margin:10}} />
        </View>
        <View>
            <Text>Meditation for Beginners</Text>
        </View>
      </View>
    </View>
  );
};

export default Article;
