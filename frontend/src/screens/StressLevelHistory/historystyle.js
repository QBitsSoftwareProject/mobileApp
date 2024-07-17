import { StyleSheet, Platform } from "react-native";

const historystyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    //padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  leftSection: {
    marginLeft: 25,
    //backgroundColor:'white',
    //paddingTop:30,
  },
  rightSection: {
    width: "70%",
    marginRight: 25,
    paddingTop: 30,
  },
  row: {
    marginBottom: 10,
    backgroundColor: "white",
    height: 49,
    borderRadius: 15,
    paddingTop: 6,
    paddingLeft: 10,
  },
  separator: {
    // height: 1,
    // backgroundColor: '#ccc',
    // marginVertical: 8,
  },

  FlatList: {
    paddingTop: 15,
  },

  scrollArea: {
    marginBottom: 275,
  },

  timetext: {
    color: "#5C677D",
    fontSize: 9,
    fontWeight: "400",
  },

  stressLvlText: {
    color: "#40495B",
    fontSize: 14,
    fontWeight: "400",
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  markText: {
    fontSize: 20,
    // marginBottom:-3,
    color: "#40495B",
    // backgroundColor: "yellow",
  },

  verticalbar: {
    width: 8, // Set the width of your vertical bar
    backgroundColor: "white", // Set the color of your vertical bar
    height: "100%", // Set the height to cover the entire container
    position: "absolute",
    left: "42%",
    borderRadius: 20,
    // shadowColor:'black',
    // shadowOffset: { width: 2, height: 2 },
    // shadowColor:'black',
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    elevation: 1,
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    // Add styles specific to the ImageBackground component here
  },

  markview: {
    marginRight: "37%",
  },
});

export default historystyles;
