import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  readMoreBtn: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#4A90BF",
    paddingHorizontal: 15,
    width: "auto",
    height: 30,
    borderRadius: 100,
  },
  tagSection: {},
  tag: {
    width: 100,
    height: 20,
    backgroundColor: "#F2F3F5",
    borderRadius: 50,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  authorDetails: {
    backgroundColor: "#4A90BF",
    height: 232,
    paddingTop: "12%",
    paddingLeft: "5%",
    width: "100%",
    position: "relative",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  articleList: {
    marginTop: "20%",
  },
  articleListItem: {
    backgroundColor: "white",
    width: 390,
    height: 95,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    display: "flex",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
});

export default styles;
