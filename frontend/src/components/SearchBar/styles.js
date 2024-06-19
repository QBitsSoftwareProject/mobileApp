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

  searchBtn: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  searchIcon: {
    width: 35,
    height: 35,
    opacity: 0.8,
  },

  resultContainer: {
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: 60,
  },
  resultItem: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});

export default styles;
