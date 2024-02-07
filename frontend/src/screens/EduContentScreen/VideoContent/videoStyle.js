import { PixelRatio, StyleSheet } from "react-native";

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
    alignItems: "center",
  },
  VideoList: {
    display: "flex",
    justifyContent: "center",
    marginTop: 120,
  },
  VideoItem: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    height: 250,
    borderRadius: 10,
    width: "90%",
    flex: 1,
  },
  VideoItemDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 10,
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
  playBtn: {
    height: 30,
    width: 30,
    borderRadius: 100 / PixelRatio.get(),
    backgroundColor: "red",
    zIndex: 100,
    position: "absolute",
  },
});

export default styles;
