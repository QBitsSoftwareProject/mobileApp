import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState } from "react";
import {
  createComment,
  getComments,
} from "../../../services/commentServices/commentServices";
import { useNavigation, useRoute } from "@react-navigation/native";
import CommentCard from "../../../components/CFCard/CommentCard";
import loadingGif from "../../../assets/animation/loading.gif";
import Toast from "react-native-toast-message";
import { useWebSockets } from "../../../services/socketServices/webSocket";

const CommentPage = () => {
  const route = useRoute();
  const { postId, previousScreen } = route.params;

  const [comment, setComment] = useState();
  const [commentList, setCommentList] = useState();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();

  const goBackFromComment = () => {
    navigation.navigate(previousScreen);
  };

  useEffect(() => {
    setCommentList(null);
    fetchComment();
    showSwipeToastOnceADay();
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [postId]);

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

  //websockets
  useWebSockets((comment) => {
    fetchComment();
  });

  const fetchComment = async () => {
    try {
      const res = await getComments(postId);
      setCommentList(res);
    } catch (error) {
      console.log(error);
    }
  };

  const showSwipeToastOnceADay = async () => {
    try {
      const lastShown = await AsyncStorage.getItem("lastShown");
      const currentTime = Date.now();

      if (
        !lastShown ||
        currentTime - parseInt(lastShown, 10) >= 24 * 60 * 60 * 1000
      ) {
        // Show the toast message
        Toast.show({
          type: "info",
          text1: "You can swipe the card to edit and delete",
          text1Style: { fontSize: 16, fontWeight: "400" }, // Customize text style
          visibilityTime: 4000, // 4 seconds
        });

        // Update AsyncStorage with current time
        await AsyncStorage.setItem("lastShown", currentTime.toString());
      }
    } catch (error) {
      console.error("Error accessing AsyncStorage:", error.message);
    }
  };

  const onUpdateComment = () => {
    fetchComment();
  };

  const onDeleteComment = (commentId) => {
    setCommentList((prevcommentList) =>
      prevcommentList.filter((comment) => comment._id !== commentId)
    );
  };

  if (!commentList) {
    return (
      <View style={styles.loadingGif}>
        <Image source={loadingGif} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        paddingBottom: isKeyboardVisible ? 50 : 130,
        flex: 1,
      }}
    >
      <View style={styles.content1}>
        <TouchableOpacity onPress={goBackFromComment} style={styles.backButton}>
          <Image source={require("../../../assets/images/BackBlack.png")} />
        </TouchableOpacity>
        <Text style={styles.commentTitle}>All comments</Text>
      </View>

      <ScrollView style={{ paddingHorizontal: 25 }}>
        <View>
          {commentList.map((item) => (
            <CommentCard
              commentId={item._id}
              key={item._id}
              postId={postId}
              relevantUserId={item.userId._id}
              image={item.userId.proPic}
              title={item.userId.userName}
              Date={item.createdAt}
              content={item.content}
              onDelete={onDeleteComment}
              onUpdate={onUpdateComment}
            />
          ))}
        </View>
      </ScrollView>
      <View style={[styles.content2, { bottom: isKeyboardVisible ? 0 : 85 }]}>
        <TextInput
          style={styles.textinput}
          value={comment}
          onChangeText={(text) => {
            setComment(text);
          }}
          multiline
          placeholder="Add a comment...."
        />
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={handleSendButtonPress}
        >
          <Image
            source={require("../../../assets/images/CommentSecImages/sendBtn.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingGif: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  content1: {
    flexDirection: "row",
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#40495B",
    opacity: 0.8,
    marginVertical: 40,
  },
  content2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    zIndex: 10,
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  textinput: {
    width: "90%",
    height: 45,
    borderColor: "#E7E7E7",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },
  sendBtn: {
    backgroundColor: "white",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  sendIcon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    opacity: 0.8,
  },
  backButton: {
    margin: 25,
    marginBottom: 10,
    zIndex: 20,
  },
});

export default CommentPage;
