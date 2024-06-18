import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
  },
  textinput: {
    height: 45,
    fontSize: 18,
    borderColor: "#E7E7E7",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },

  sendIcon: {
    width: 35,
    height: 35,
    opacity: 0.8,
  },
});

export default styles;
