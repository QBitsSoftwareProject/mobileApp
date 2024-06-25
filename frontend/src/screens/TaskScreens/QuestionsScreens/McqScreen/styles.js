import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backbtn: {
    marginTop: 50,
  },

  question: {
    fontWeight: "400",
    fontSize: 24,
    color: "#101318",
    marginTop: 32,
    paddingBottom: 32,
  },

  nextBtn: {
    height: 58,
    width: 258,
    borderRadius: 20,
    borderColor: "#4ABFB4",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtnTxt: {
    fontWeight: "500",
    fontSize: 14,
    color: "#40495B",
  },
  inputBox: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4ABFB4",
    marginBottom: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default styles;
