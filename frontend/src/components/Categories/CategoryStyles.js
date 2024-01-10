import { PixelRatio, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    height: 1000,
    backgroundColor: "orange",
    flex: 1,
    display: "flex",
    flexWrap:"wrap",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  CategoryItem: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: "1000" / PixelRatio.get(),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
