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
    height: 90,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
    padding:15,
  },
  imgContainer: {
    backgroundColor: "white",
    borderColor: "#5485DF",
    borderStyle: "solid",
    borderWidth: 5,
    width: 54,
    height: 54,
    elevation:50,
    shadowColor:"#5485DF",
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
    display: "flex",
  },
  audioTxt1: {
    fontSize: 18,
    fontWeight: "500",
  }
});

export default styles;
