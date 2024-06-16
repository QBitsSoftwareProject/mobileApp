import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  createComment,
  getComments,
} from "../../services/commentServices/commentServices";
import { useRoute } from "@react-navigation/native";
import CommentCard from "../../components/CFCard/CommentCard";

const CommentPage = () => {
  const route = useRoute();

  const { postId } = route.params;

  const [comment, setComment] = useState();

  const [commentList, setCommentList] = useState();

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleSendButtonPress = async () => {
    if (!comment) return;
    try {
      await createComment(postId, comment);
      setComment("");
      fetchComment();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComment = async () => {
    try {
      const res = await getComments(postId);
      setCommentList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);

  const handleUpdate = () => {
    fetchComment();
  };

  const onDeleteComment = (commentId) => {
    setCommentList((prevcommentList) =>
      prevcommentList.filter((comment) => comment._id !== commentId)
    );
  };

  if (!commentList) {
    return;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginVertical: 50 }}>
        <View>
          {commentList.map((item) => (
            <CommentCard
              commentId={item._id}
              key={item._id}
              postId={postId}
              content={item.content}
              onDelete={onDeleteComment}
              onUpdate={handleUpdate}
            />
          ))}
        </View>

        <View style={styles.content3}>
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
              source={require("../../assets/images/CommentSecImages/sendBtn.png")}
              style={styles.sendIcon}
            />
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={handleModalClose}>
            <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content3: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textinput: {
    width: "80%",
    borderBottomWidth: 1,
    borderColor: "#E7E7E7",
    marginBottom: 15,
  },

  sendIcon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    opacity: 0.8,
  },

  modalBG: {
    flex: 1,
    zIndex: -1,
  },
});

export default CommentPage;
