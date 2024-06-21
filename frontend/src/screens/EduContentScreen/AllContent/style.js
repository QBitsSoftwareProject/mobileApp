import { StyleSheet } from "react-native";
import { Font } from "expo-font";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F2F3F5",
    alignItems: "center",
    height: "100%",
  },
  NavContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginLeft:"8%",
  },
  NavBar: {
    borderRadius: 100,
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  NavBarElements: {
    color: "black",
    fontWeight: "900",
    textAlign:"center",
    marginLeft:"auto",
    marginRight:"auto",
  },
  NavBarElements_currentBtn: {
    backgroundColor: "#4A90BF",
    padding: 10,
    borderRadius: 100,
    width: 100,
  },
  NavBarElements_currentText: {
    color: "white",
    textAlign: "center",
  },
  Content: {
    width: "100%",
    marginTop: 120,
  },
  mainHeading: {
    color: "black",
    marginTop: 70,
    marginLeft: 10,
    fontSize: 20,
  },
  mainHeading2: {
    color: "black",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
});

export default styles;
