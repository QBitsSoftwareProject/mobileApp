import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    backgroundColor: "#F2F3F5",
    alignItems: "center",
    height: "100%",
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    marginTop: 80,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#4A90BF",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 40,
  },
  NavBarElements: {
    color: "black",
    fontWeight: "900",
  },
  NavBarElements_current: {
    color: "white",
  },
  authorSections: {
    marginTop: 120,
  },
  authorSection1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 15,
  },
  authorSection2: {
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(146, 140, 140, 0.5)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  exploreBtn: {
    backgroundColor: "#4A90BF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
  },
  exploreBtnText: {
    color: "white",
    fontWeight: "bold",
  },
  articleCategories: {
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
  },
  article: {
    width: "90%",
    height: 250,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 7,
    position: "relative",
    marginVertical: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  articleDetails: {
    width: "100%",
    height: "33%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  articleSection: {
    display: "flex",
    flexDirection: "column",
  },
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
    width: "100%",
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 10,
    padding: 10,
    marginBottom: "25%",
  },
  articleListItem: {
    backgroundColor: "white",
    width: 390,
    height: 100,
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
