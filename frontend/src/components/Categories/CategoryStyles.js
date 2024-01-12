import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
    height:"auto",
    display: "flex",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  CategoryItem: {
    width: 67,
    height: 67,
    borderRadius: "1000" / PixelRatio.get(),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
