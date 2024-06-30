import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
} from "react-native";
import { ListItem } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { deleteJournal } from "../../services/journalService/journalService";
import { Overlay } from "../ViewJournalScreen/deletePopup";

const JounalCard = ({ journal, setIsRefresh }) => {
  const navigation = useNavigation();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleEdit = () => {
    navigation.navigate("EditJournal", {
      item: journal,
      itemTittle: journal.tittle,
      itemText: journal.journalEntry,
      itemEmoji: journal.emoji,
    });
  };

  // const handleDelete = async () => {
  //   try {
  //     await deleteJournal(journal._id);
  //     setIsRefresh((prev) => prev + 1);
  //   } catch (error) {
  //     console.error("Failed to delete Journal:", error);
  //   }
  // };

  const displayDeleteOverlay = () => {
    setIsOverlayVisible(true);
  };

  const findMoodIcon = () => {
    let mood = "";

    switch (journal.emoji) {
      case 10:
        mood = "😊";
        break;
      case 20:
        mood = "😭";
        break;
      case 30:
        mood = "😡";
        break;
      case 40:
        mood = "😍";
        break;
      case 50:
        mood = "😨";
        break;
      case 60:
        mood = "😐";
        break;
      case 70:
        mood = "🥱";
        break;
      case 80:
        mood = "😟";
        break;
      default:
        mood = "";
        break;
    }
    return mood;
  };

  const journalMood = findMoodIcon();

  return (
    <>
      <ListItem.Swipeable
        rightContent={(reset) => (
          <View style={styles.rightContainer1}>
            <TouchableOpacity
              onPress={() => {
                displayDeleteOverlay();
                reset();
              }}
              style={styles.button}
            >
              <Image
                source={require("../../assets/images/CommentSecImages/mdi_delete.png")}
                style={styles.delImg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleEdit();
                reset();
              }}
              style={styles.button}
            >
              <Image
                source={require("../../assets/images/CommentSecImages/mdi_edit.png")}
                style={styles.editImg}
              />
            </TouchableOpacity>
          </View>
        )}
        rightStyle={styles.deleteBtn}
        containerStyle={styles.cardContainer}
      >
        <ListItem.Content>
          <View style={styles.content1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>{journal.tittle}</Text>
              <Text style={styles.mood}>{journalMood}</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.commentContent}>{journal.journalEntry}</Text>
            </View>
            <Text style={styles.date}>{journal.date}</Text>
          </View>
        </ListItem.Content>
      </ListItem.Swipeable>

      <Overlay
        item={journal._id}
        isVisible={isOverlayVisible}
        onClose={() => setIsOverlayVisible(false)}
        setIsRefresh={setIsRefresh}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "auto",
    borderRadius: 20,
    marginBottom: 15,
  },
  content1: {
    width: "100%",
  },
  mood: {
    fontSize: 25,
  },
  content2: {
    display: "flex",
    width: "90%",
    flexDirection: "column",
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  date: {
    fontSize: 10,
    fontWeight: "400",
    color: "#5C677D",
    textAlign: "right",
  },
  commentContent: {
    fontSize: 14,
    fontWeight: "400",
  },
  rightContainer1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B0B4C0",
    borderRadius: 20,
  },
  delImg: {
    width: 40,
    height: 40,
  },
  editImg: {
    width: 35,
    height: 35,
  },
  button: {
    height: 40,
    // width: 0,
    borderRadius: 10,
    marginVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {},
});

export default JounalCard;
