import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  VideoList: {
    display: "flex",

    justifyContent: "center",
  },
  VideoItem: {
    marginBottom: 40,
    backgroundColor: "white",

    borderRadius: 10,
  },
  VideoItemDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  details1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details2: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
  playBtn: {
    height: 50,
    width: 50,
    borderRadius: 100 / PixelRatio.get(),
    zIndex: 100,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#4A90BF",
    borderWidth: 4,
  },
  VideoItem: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  playButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default styles;
