import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import EditDeletMenu from "../../components/DropDownMenu/EditDeleteMenu";
import ReportMenu from "../DropDownMenu/ReportMenu";
import {
  createComment,
  getComment,
} from "../../services/commentServices/commentServices";
import CommentCard from "../../components/CFCard/CommentCard";

const PostCard = (props) => {
  const [isPress, setIsPress] = useState(false);

  const [comment, setComment] = useState();

  const handlePress = () => {
    setIsPress(!isPress);
  };

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

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  // const handleSendButtonPress = async () => {
  //   try {
  //     const res = await createComment(props.postId, content);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleSendButtonPress;
  // }, []);

  // const [commentList, setCommentList] = useState();

  // const fetchComment = async () => {
  //   try {
  //     const res = await getComment();
  //     setCommentList(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchComment();
  // }, []);

  // if (!commentList) {
  //   return;
  // }

  return (
    <View style={styles.cardBox}>
      <View style={styles.content1}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.imageframe}>
            <Image source={{ uri: props.image }} style={styles.image} />
          </View>

          <View style={styles.content2}>
            <Text style={styles.title}>{props.title}</Text>

            <View style={{ width: "100%" }}>
              <Text style={styles.sub}>{formattedDate}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => handlePress("")}>
            <Image
              source={require("../../assets/images/NavigationIcons/Navigation Menu Vertical.png")}
              style={styles.navMenu}
            />
          </TouchableOpacity>

          {props.cardName == "HomePageCard" && isPress && (
            <ReportMenu postId={props.postId} DPtext={"Report"} />
          )}

          {props.cardName == "MyProfileCard" && isPress && (
            <EditDeletMenu
              postId={props.postId}
              // checkPress={setIsPress}
              DPtext1={"Edit Post"}
              DPtext2={"Delete post"}
              onDelete={props.onDelete}
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
      <View style={styles.content3}>
        <TextInput
          style={styles.textinput}
          value={comment}
          onChangeText={(text) => {
            // props.content(text);
            setComment(text);
          }}
          multiline
          placeholder="Add a comment...."
        />
        <TouchableOpacity
          style={styles.iconframe}
          // onPress={handleSendButtonPress}
        >
          <Image
            source={require("../../assets/images/PostCardImages/sendBtn.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </View>
      {/* 
      <ScrollView style={{ height: "100%", marginBottom: 25 }}>
        <View>
          {commentList.map((item) => (
            <CommentCard
              commentId={item._id}
              key={item._id}
              postId={item.postId}
              content={item.content}
            />
          ))}
        </View>
      </ScrollView> */}
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
    elevation: 2,
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
    elevation: 1,
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
  postImage: {
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
  content3: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  textinput: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#3498db",
    marginBottom: 15,
  },
  iconframe: {
    height: 30,
    width: 30,
    backgroundColor: "#3498db",
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    width: "60%",
    height: "60%",
    resizeMode: "cover",
    position: "absolute",
    alignSelf: "center",
  },

  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});

export default PostCard;
