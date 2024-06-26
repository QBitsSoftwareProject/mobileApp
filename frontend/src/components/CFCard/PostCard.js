import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { useState } from "react";
import EditDeletMenu from "../../components/DropDownMenu/EditDeleteMenu";
import ReportMenu from "../DropDownMenu/ReportMenu";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getCommentsCount } from "../../services/commentServices/commentServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PostCard = (props) => {
  const navigation = useNavigation();
  // console.log(props.relevantUserId);

  const [isPress, setIsPress] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [checkUser, setCheckUser] = useState(false);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
      return `${minutes}min ago`;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) {
      return `${hours}h ago`;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 7) {
      return `${days}d ago`;
    }

    if (now.getFullYear() === date.getFullYear()) {
      return date.toLocaleString("default", { month: "short", day: "numeric" });
    }

    return date.toLocaleString("default", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formattedDate = formatTimestamp(props.Date);

  const handleCommentSectionNavigation = () => {
    navigation.navigate("CommentPage", {
      postId: props.postId,
      previousScreen:
        props.cardName === "HomePageCard" ? "HomePage" : "ProfileScreen",
    });
  };

  const fetchCommentCount = async () => {
    try {
      const res = await getCommentsCount(props.postId);
      setCommentCount(res);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCommentCount();
    }, [])
  );

  const handlePress = async () => {
    try {
      const currentUserId = await AsyncStorage.getItem("userId");
      // console.log(currentUserId);
      // console.log(props.relevantUserId);
      if (currentUserId == props.relevantUserId) {
        setCheckUser(true);
      } else {
        setCheckUser(false);
      }
      setIsPress(!isPress);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.cardBox}>
      <View style={styles.content1}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.imageframe}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>

          <View style={styles.content2}>
            <Text style={styles.title}>{props.title}</Text>

            <Text style={styles.date}>{formattedDate}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <TouchableOpacity
            style={styles.toucharea}
            onPress={() => handlePress()}
          >
            <Image
              source={require("../../assets/images/PostCardImages/dots.png")}
              style={styles.navMenu}
            />
          </TouchableOpacity>

          {!checkUser && isPress && (
            <ReportMenu postId={props.postId} onClose={setIsPress} />
          )}

          {checkUser && isPress && (
            <EditDeletMenu
              postId={props.postId}
              onDelete={props.onDelete}
              onClose={setIsPress}
              onUpdate={props.onUpdate}
            />
          )}
        </View>
      </View>

      <View style={{ paddingHorizontal: 15, marginBottom: 10 }}>
        <Text style={styles.des}>{props.description}</Text>
      </View>

      <View>
        <View>
          {props.postImage != null && (
            <Image source={{ uri: props.postImage }} style={styles.postImage} />
          )}
        </View>
      </View>

      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text>{commentCount}</Text>
        <TouchableOpacity
          style={styles.toucharea}
          onPress={handleCommentSectionNavigation}
        >
          <Image
            source={require("../../assets/images/CommentSecImages/comment.png")}
            style={styles.commentIcon}
          />
        </TouchableOpacity>
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
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content2: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },

  date: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },
  des: {
    fontSize: 14,
    fontWeight: "400",
    color: "#5C677D",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navMenu: {
    height: 20,
    width: 20,
  },

  commentIcon: {
    width: 25,
    height: 25,
    opacity: 0.6,
  },
  toucharea: {
    width: 65,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
});

export default PostCard;
