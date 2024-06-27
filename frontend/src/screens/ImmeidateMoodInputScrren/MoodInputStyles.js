import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backBtn: {
    // marginTop:50,
    marginLeft: 25,
    marginBottom: 25,
  },

  backPng: {
    width: 53,
    height: 53,
  },

  horivontalBar: {
    width: "88%",
    height: 10,
    backgroundColor: "#4ABFB4",
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 32,
  },

  textArea: {
    // marginTop: 32,
    marginHorizontal: 25,
  },

  textOne: {
    fontWeight: "400",
    fontSize: 22,
    color: "#101318",
    textAlign: "center",
  },

  imageArea: {
    alignSelf: "center",
  },

  mainImage: {
    width: 120,
    height: 120,
    opacity: 0.8,
  },

  imojiRow: {
    flexDirection: "row",
    marginTop: 48,
    marginBottom: 25,
    alignItems: "center",
    // marginBottom:110,
    // height: 150,
  },
  leftImoji: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    marginRight: 25,
    marginLeft: 45,
    borderRadius: 15,
  },
  rightImoji: {
    flex: 1,
    backgroundColor: "white", // Change the background color if needed
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    marginRight: 45,
    borderRadius: 15,
  },

  imojiRowTwo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 64,
    // marginBottom:110,
  },

  optionImg: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },

  submitBtn: {
    width: 258,
    height: 58,
    backgroundColor: "white",
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#4A90BF",
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontSize: 14,
  },

  selectedOption: {
    backgroundColor: "#ABF4DF",
  },
});
export default styles;
