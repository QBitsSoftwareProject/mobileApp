import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  content1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingVertical: 25,
  },

  descript2: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  viewBtn: {
    height: 35,
    borderRadius: 20,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  viewText: {
    fontSize: 12,
    fontSize: 12,
    fontWeight: "400",
    color: "#5C677D",
  },
});

export default styles;
