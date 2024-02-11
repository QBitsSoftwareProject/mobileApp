import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
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
      <View style={styles.articleDetails}>
        <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center" }}>
          <Image
            source={item.author_profile}
            style={{
              margin: 10,
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "500", textTransform: "uppercase" }}>
            Meditation for Beginners
          </Text>
          <Text style={{ color: "#596C79", fontSize: 12 }}>
            By Andrew Huberman
          </Text>
        </View>
        <View style={{ display: "flex", justifyContent: "center", margin: 7 }}>
          <TouchableOpacity>
            <View style={styles.readMoreBtn}>
              <Image
                source={require("../../../assets/images/articleThumbnails/bi_eye-fill.png")}
              />
              <Text
                style={{ fontSize: 10, color: "white", fontWeight: " 500 " }}
              >
                {" "}
                READ MORE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Article;
