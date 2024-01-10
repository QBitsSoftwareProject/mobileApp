import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    height: 1000,
    backgroundColor: "orange",
    display: "flex",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  CategoryItem: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: "1000" / PixelRatio.get(),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
