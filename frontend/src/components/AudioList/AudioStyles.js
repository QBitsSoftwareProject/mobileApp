import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  audioItem: {
    backgroundColor: "white",

    flexDirection: "row",

    height: "auto",
    borderRadius: 15,
    marginVertical: 10,
    gap: 15,
    elevation: 1,
    padding: 15,
  },
  imgContainer: {
    backgroundColor: "white",
    borderColor: "#5485DF",
    borderStyle: "solid",
    borderWidth: 5,
    width: 54,
    height: 54,
    elevation: 50,
    shadowColor: "#5485DF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1000" / PixelRatio.get(),
  },

  descriptionSection: {
    width: "70%",
  },
  audioTxt1: {
    fontSize: 16,
    fontWeight: "500",
    color: "#40495B",
  },
});

export default styles;
