import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./AllAuthorScreenStyles";

import { useNavigation } from "@react-navigation/native";

const AuthorCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.AuthorCard}>
      {/* image,name and article count */}
      <View style={styles.CardImageSection}>
        <Image
          source={require("../../../../assets/images/profilePics/img4.png")}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 18 }}>DR.ANDREW HUBERMAN</Text>
          <Text style={{ fontSize: 16 }}>46 Articles</Text>
        </View>
      </View>
      {/* image,name and article count */}
      {/* author description */}
      <View style={styles.AuthorDescription}>
        <Text style={{ fontSize: 12 }}>
          Andrew , is a famous neuro scientist who writes intuitive and
          fascinating blogs and articles about brain health, brain chemistry and
          food that affect the chemistry of the brain. He is currently a
          lecturer at Stanford university.
        </Text>
      </View>
      {/* author description */}
      {/* view article button section */}
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* VIEW BTN */}
        <Pressable
          onPress={() => {
            navigation.navigate("AuthorScreen", { authorId: item.id });
          }}
          android_ripple={{ borderless: true, radius: 80, color: "#7CBDE8" }}
        >
          <View style={styles.ViewBtnBorder}>
            <View style={styles.ViewBtn}>
              <Text style={styles.ViewBtnText}>View articles</Text>
            </View>
          </View>
        </Pressable>
        {/* VIEW BTN */}
      </View>
      {/* view article button section */}
    </View>
  );
};

export default AuthorCard;
