import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    zIndex: 10,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 5,
    bottom: 20,
  },
  textinput: {
    width: "90%",
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
    marginRight: 3,
    alignSelf: "center",
    opacity: 0.8,
  },
});

export default styles;
