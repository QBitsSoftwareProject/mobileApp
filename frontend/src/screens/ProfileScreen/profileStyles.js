import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageEdit: {
    width: "100%",
    height: 146,
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: "row",
  },

  imageEditRight: {
    flex: 7,
    paddingTop: 15,
  },

  imageEditLeft: {
    flex: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  editInfo: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 15,
    padding: 15,
  },

  header: {
    flexDirection: "row",
    padding: 25,

    zIndex: 20,
    alignItems: "center",
    gap: 32,
    width: "100%",
  },

  headerTextView: {
    width: "100%",
    position: "absolute",
    marginLeft: 25,

    alignSelf: "center",
    zIndex: -1,
  },

  headerText: {
    fontSize: 24,
    color: "#101318",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
