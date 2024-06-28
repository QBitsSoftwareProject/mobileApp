// styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    paddingRight: 25,
    paddingLeft: 25,
  },
  backbtn: {
    position: "absolute",
    marginTop: 50,
    marginLeft: 25,
  },
  headertxt: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 146,
  },
  daytxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 7,
    textDecorationLine: "underline",
  },
  greetingtxt: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 32,
  },
  descriptiontxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 32,

    lineHeight: 30,
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },

  button: {
    flexDirection: "row",
    marginTop: 48,
    backgroundColor: "white",
    width: 250,
    height: 58,
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttontxt: {
    color: "#40495B",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default styles;
