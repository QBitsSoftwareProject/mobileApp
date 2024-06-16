import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import CommentEditDeleteMenu from "../../components/DropDownMenu/CommentsEditDeleteMenu";

const CommentCard = (props) => {
  const [isPress, setIsPress] = useState(false);

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
  // console.log(formattedDate);
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

            <Text>{props.content}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <TouchableOpacity onPress={() => handlePress("")}>
            <Image
              source={require("../../assets/images/PostCardImages/dots.png")}
              style={styles.navMenu}
            />
          </TouchableOpacity>

          {isPress && (
            <CommentEditDeleteMenu
              commentId={props.commentId}
              postId={props.postId}
              DPtext1={"Edit"}
              DPtext2={"Delete"}
              onClose={setIsPress}
              onDelete={props.onDelete}
              onUpdate={props.onUpdate}
            />
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
    alignSelf: "center",
    marginBottom: 20,
    paddingBottom: 40,
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
    height: 20,
    width: 20,
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
    borderColor: "#E7E7E7",
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

export default CommentCard;
