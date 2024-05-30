import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { useState } from "react";
import DocPop from "../../components/DropDownMenu/CFDocPop";
const PostCard = (props) => {
  const [isPress, setIsPress] = useState(false);
  const handlePress = () => {
    setIsPress(!isPress);
  };
  return (
    <View style={styles.cardBox}>
      <View style={styles.content1}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.imageframe}>
            <Image source={props.image} style={styles.image} />
          </View>

          <View style={styles.content3}>
            <Text style={styles.title}>{props.title}</Text>

            <View style={{ width: "90%" }}>
              <Text style={styles.sub}>{props.sub}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => handlePress()}>
            <Image
              source={require("../../assets/images/NavigationIcons/Navigation Menu Vertical.png")}
              style={styles.navMenu}
            />
          </TouchableOpacity>
          {isPress && <DocPop DPtext1={"Edit Post"} DPtext2={"Delete post"} />}
        </View>
      </View>

      <View style={{ paddingHorizontal: 15, marginBottom: 10 }}>
        <Text style={styles.des}>{props.description}</Text>
      </View>

      <View style={styles.content2}>
        <View>
          {props.Postimage != null && (
            <Image source={props.Postimage} style={styles.Postimage} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    alignSelf: "center",
    marginBottom: 20,
  },
  content1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  imageframe: {
    height: 60,
    width: 60,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    marginRight: 15,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content3: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },

  sub: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },
  des: {
    fontSize: 13,
    fontWeight: "400",
    color: "#5C677D",
  },
  Postimage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navMenu: {
    height: 8,
    width: 8,
    marginRight: 25,
  },
});

export default PostCard;
