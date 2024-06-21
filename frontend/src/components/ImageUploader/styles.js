import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: "#40495B",
    // marginBottom: 7,
  },
  imageBtn: {
    width: 170,
    height: 40,
    backgroundColor: "transperant",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#5C677D",
    opacity: 0.6,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  image: {
    width: 300,
    height: 200,

    borderRadius: 10,
  },
});
