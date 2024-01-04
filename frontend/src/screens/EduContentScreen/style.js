import { StyleSheet } from "react-native";
import { Font } from "expo-font";

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
    borderRadius: 100,
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
  },
  mainHeading: {
    color: "black",
    marginTop: -30,
    fontSize: 20,
  },
});

export default styles;
