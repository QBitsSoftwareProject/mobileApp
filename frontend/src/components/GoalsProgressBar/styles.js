import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    gap: 12,
  },
  progressTxt: {
    fontWeight: "400",
    fontSize: 12,
    color: "#979DAC",
    marginTop: 6,
  },
  backBar: {
    backgroundColor: "#F2F3F5",
    height: 10,
    borderRadius: 15,

    flex: 1,
  },
  frontBar: {
    position: "relative",
    backgroundColor: "#4ABFB4",
    height: 10,
    borderRadius: 15,
  },
  percentage: {
    fontSize: 14,
  },
});

export default styles;
