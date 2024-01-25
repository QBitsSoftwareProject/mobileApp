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
  Content: {
    backgroundColor: "#4A90BF",
    width: "100%",
    height: 300,
    marginTop: 120,
    alignItems: "center",
  },
  authorSections: {},
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
    borderBottomColor: "#928C8C",
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
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 7,
    marginVertical: 5,
    position: "relative",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
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
    // justifyContent:"center",
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  readMoreBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#4A90BF",
    padding: 5,
    width: 100,
    height: 30,
    borderRadius: 100,
  },
  tagSection: {},
  tag: {
    width: 100,
    height: 20,
    backgroundColor: "#F2F3F5",
    borderRadius:50,
    margin:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
  },
});

export default styles;
