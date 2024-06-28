import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    color: "#101318",
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 67,
    color: "#101318",
  },

  btncontainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  calendarContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 3,
  },

  floatingButtonContainer: {
    position: "absolute",
    bottom: 100,
    right: 0,
    backgroundColor: "yellow",
  },
});

export default styles;
