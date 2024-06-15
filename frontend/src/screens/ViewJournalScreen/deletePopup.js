import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { deleteJournal } from "../../services/journalService/journalService";

// call the delete function
export const Overlay = ({ item, isVisible, onClose }) => {
  const handleDeleteButton = async () => {
    try {
      await deleteJournal(item);
      onClose(); // Close the modal after successful deletion
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.overlayContent}>
          <TouchableOpacity onPress={onClose}>
            <Image
              source={require("../../assets/images/journal/closeimg.png")}
              style={styles.closeimg}
            ></Image>
          </TouchableOpacity>

          <Text style={styles.topic}>Delete this ? </Text>

          <View style={styles.overlayimg}>
            <Image
              source={require("../../assets/images/journal/addpic.png")}
            ></Image>

            <TouchableOpacity
              style={styles.create}
              onPress={handleDeleteButton}
            >
              <Text style={styles.createText}>Delete Journal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  closeimg: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    marginLeft: 270,
  },

  topic: {
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "400",
    marginBottom: 40,
    color: "#101318",
  },

  overlayimg: {
    width: 197,
    height: 350,
  },

  textarea: {
    width: 322,
    height: 300,
  },
  create: {
    backgroundColor: "#ffffff",
    borderColor: "#5FA1CE",
    borderWidth: 2,
    width: 250,
    height: 58,
    borderRadius: 75,
    alignSelf: "center",
    marginTop: 82,
  },
  createText: {
    paddingTop: 17,
    fontSize: 16,
    color: "#101318",
    textAlign: "center",
    justifyContent: "center",
  },
});

// export default Overlay;
