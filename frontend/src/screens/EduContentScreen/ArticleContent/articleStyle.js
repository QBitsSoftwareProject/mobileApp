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
    paddingTop:20,
    display:"flex",
    alignItems:"center",
  },
});

export default styles;
