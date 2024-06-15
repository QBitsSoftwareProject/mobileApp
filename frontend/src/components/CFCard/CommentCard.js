import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import CommentEditDeleteMenu from "../../components/DropDownMenu/CommentsEditDeleteMenu";

const CommentCard = (props) => {
  const [isPress, setIsPress] = useState(false);

  const handlePress = () => {
    setIsPress(!isPress);
  };
  return (
    <View style={styles.cardBox}>
      <View>
        <View style={styles.imageframe}>
          <Image source={props.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.content2}>
        <View>
          <Text style={styles.comment}>{props.content}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handlePress("")}>
        <Image
          source={require("../../assets/images/PostCardImages/dots.png")}
          style={styles.navMenu}
        />
      </TouchableOpacity>
      {isPress && (
        <CommentEditDeleteMenu
          postId={props.commentId}
          DPtext1={"Edit"}
          DPtext2={"Delete"}
          onDelete={props.onDelete}
          onClose={setIsPress}
          onUpdate={props.onUpdate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    width: "90%",
    height: "auto",
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: "red",
    marginBottom: 15,
  },

  imageframe: {
    height: 60,
    width: 60,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content2: {
    width: "70%",
    height: "auto",
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  comment: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },

  navMenu: {
    height: 20,
    width: 20,
    marginRight: 25,
  },
});

export default CommentCard;
