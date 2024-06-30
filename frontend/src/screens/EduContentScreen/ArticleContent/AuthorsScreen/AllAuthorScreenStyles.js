import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  HeaderSub: {
    backgroundColor: "#4A90BF",
    height: 130,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  AuthorCard: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    elevation: 2,
    height: "auto",
  },
  CardImageSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  AuthorDescription: {
    marginLeft: "20%",
    width: "80%",
  },
  ViewBtnBorder: {
    borderColor: "#263552",

    padding: 15,
    borderRadius: 40,
  },
  ViewBtn: {
    backgroundColor: "#4A90BF",
    padding: 10,
    borderRadius: 40,
  },
  ViewBtnText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontSize: 11,
    fontWeight: "500",
  },
});

export default styles;
