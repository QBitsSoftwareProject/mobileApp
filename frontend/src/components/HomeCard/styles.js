import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  cardBox: {
    minHeight: 112,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    marginTop: 15,
    elevation: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frame: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "rgba(93,174,229,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImg: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
  },
  headText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  subText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#5C677D",
  },
});
