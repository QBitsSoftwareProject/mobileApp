import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  conatiner: {
    marginHorizontal: 25,
  },
  headerText: {
    marginVertical: 32,
    fontSize: 26,
    fontWeight: "400",
    color: "#101318",
  },
  subText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#979DAC",
    marginBottom: 32,
    textAlign: "center",
  },
  nextBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#45B4FF",
    width: 250,
    height: 50,
    elevation: 1,
    marginBottom: 15,
  },
  nextText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  wrapper: {
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "rgba(151,157,172,0.6)",
    justifyContent: "center",
  },
  picker: {
    height: 50,
    fontSize: 14,
    color: "#40495B",
    backgroundColor: "white",
  },
  pickerItem: {
    fontSize: 16,
    color: "#40495B",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
