import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  categoryItemContainer: {
    height: 150,
    width: 150,
    position: "relative",
    margin: 20,
  },
  categoryItemImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },
  categoryItemText: {
    color: "white",
    fontSize: 15,
    position: "absolute",
    margin: 10,
    bottom: 0,
  },
});

export default styles;
