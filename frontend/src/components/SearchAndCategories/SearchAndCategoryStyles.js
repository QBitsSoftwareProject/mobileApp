import { StyleSheet } from "react-native";
import { Font } from "expo-font";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F2F3F5",
    alignItems: "center",
    height: "100%",
    display: "flex",
  },
  NavContainer: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
  },
  NavBar: {
    borderRadius: 100,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  NavBarElements: {
    fontWeight: "700",
    display: "flex",
    flexDirection: "row",
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 100,
  },
  NavBarElementText: {
    fontWeight: "bold",
  },
  NavBarElements_currentBtn: {
    backgroundColor: "#4A90BF",
  },
  NavBarElements_currentText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  Content: {
    width: "100%",
    marginTop: 120,
  },
  mainHeading: {
    color: "black",
    marginTop: -30,
    marginLeft: 10,
    fontSize: 20,
  },
  mainHeading2: {
    color: "black",
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
  },
});

export default styles;
