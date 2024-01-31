import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import styles from "../articleStyle";
import backImg from "../../../../assets/images/icons/Back-White.png";
import { useNavigation } from "@react-navigation/native";

const AuthorScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View style={styles.authorDetails}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("ArticleScreen");
              }}
            >
              <Image source={backImg} />
            </Pressable>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                marginStart: "5%",
                fontWeight: "600",
              }}
            >
              Author
            </Text>
          </View>
          <View><Text  style={{color:"white",fontSize:23,backgroundColor:"orange"}}>Andrew Huberman</Text></View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthorScreen;
