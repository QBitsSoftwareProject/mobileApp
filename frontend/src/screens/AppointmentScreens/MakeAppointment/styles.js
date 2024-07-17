import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerBox: {
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    color: "#40495B",
    fontWeight: "700",
  },
  boxcontainer: {
    flexDirection: "row",

    marginBottom: 20,

    gap: 15,
  },
  Image: {
    height: 160,
    width: 150,
    borderRadius: 10,
  },
  description: {
    flex: 1,
  },
  docDetails: {
    fontSize: 14,
    color: "#5C677D",
    fontWeight: "400",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#101318",
  },
  titledescription: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 25,
    color: "#5C677D",
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loardingGif: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  noTimeSlotText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FF0000",
    opacity: 0.8,
    marginVertical: 10,
    marginHorizontal: 95,
  },
});

export default styles;
