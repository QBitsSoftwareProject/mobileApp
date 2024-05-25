import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  audioItem: {
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "auto",
    height: 100,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  imgContainer: {
    backgroundColor: "white",
    borderColor: "#5485DF",
    borderStyle: "solid",
    borderWidth: 5,
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1000" / PixelRatio.get(),
  },
  playBtnSection: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionSection: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
  },
  audioTxt1: {
    fontSize: 18,
  }
});

export default styles;
