import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import { useState } from "react";
import EditDeletMenu from "../../components/DropDownMenu/EditDeleteMenu";
import ReportMenu from "../DropDownMenu/ReportMenu";
import { useNavigation } from "@react-navigation/native";

const PostCard = (props) => {
  const [isPress, setIsPress] = useState(false);

  const navigation = useNavigation();

  // const [comment, setComment] = useState();

  // const [commentList, setCommentList] = useState();

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
    navigation.navigate("CommentPage", { postId: props.postId });
  };

  // const handleModalClose = () => {
  //   Keyboard.dismiss();
  // };

  // const handleSendButtonPress = async () => {
  //   try {
  //     await createComment(props.postId, comment);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchComment = async () => {
  //   try {
  //     const res = await getComments(props.postId);
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

  const handlePress = () => {
    setIsPress(!isPress);
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

            <Text style={styles.sub}>{formattedDate}</Text>
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
            onPress={() => handlePress("")}
          >
            <Image
              source={require("../../assets/images/PostCardImages/dots.png")}
              style={styles.navMenu}
            />
          </TouchableOpacity>

          {props.cardName == "HomePageCard" && isPress && (
            <ReportMenu
              postId={props.postId}
              DPtext={"Report"}
              onClose={setIsPress}
            />
          )}

          {props.cardName == "MyProfileCard" && isPress && (
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

      <TouchableOpacity
        style={styles.toucharea}
        onPress={handleCommentSectionNavigation}
      >
        <Image
          source={require("../../assets/images/CommentSecImages/comment.png")}
          style={styles.commentIcon}
        />
      </TouchableOpacity>
      {/* <View style={styles.content3}>
        <TextInput
          style={styles.textinput}
          value={comment}
          onChangeText={(text) => {
            setComment(text);
          }}
          multiline
          placeholder="Add a comment...."
        />
        <TouchableOpacity onPress={handleSendButtonPress}>
          <Image
            source={require("../../assets/images/PostCardImages/sendBtn.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </View> */}
      {/* 
      <ScrollView style={{ marginBottom: 25 }}>
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
    height: 35,
    width: 35,
    borderColor: "white",
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
    marginRight: 25,
  },

  commentIcon: {
    width: 25,
    height: 25,
    margin: 10,
  },
  toucharea: {
    width: 45,
    height: 35,
    borderWidth: 3,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  // content3: {
  //   padding: 15,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  // textinput: {
  //   width: "80%",
  //   borderBottomWidth: 1,
  //   borderColor: "#E7E7E7",
  //   marginBottom: 15,
  // },

  // sendIcon: {
  //   width: 40,
  //   height: 40,
  //   alignSelf: "center",
  //   opacity: 0.8,
  // },

  // modalBG: {
  //   flex: 1,
  //   zIndex: -1,
  // },
});

export default PostCard;
