import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 25,
    paddingTop: 32,
  },

  Text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#101318",
    marginBottom: 10,
    opacity: 0.6,
  },
  Text1: {
    color: "#101318",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 10,
    // marginTop: 15,
    opacity: 0.6,
    // paddingLeft: 5,
  },
  Text2: {
    color: "#101318",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 15,
    marginTop: 32,
    opacity: 0.6,
  },
  create: {
    backgroundColor: "#ffffff",
    borderColor: "#5FA1CE",
    borderWidth: 1,
    width: 250,
    height: 58,
    borderRadius: 75,
    alignSelf: "center",

    marginBottom: 112,
    color: "red",
  },
  createText: {
    paddingTop: 17,
    fontSize: 16,
    color: "#101318",
    textAlign: "center",
    justifyContent: "center",
  },

  itemText: {
    color: "black", // or any color you prefer
    fontSize: 16, // or any font size you prefer
    // add any other styles as needed
  },

  tabbar: {},
  editTittle: {
    color: "#101318",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 15,
    marginTop: 15,
    opacity: 0.6,
  },
});
export default styles;
