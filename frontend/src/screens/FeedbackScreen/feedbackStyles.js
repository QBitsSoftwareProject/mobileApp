import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
  },

  textarea: {
    borderWidth: 0,
    borderRadius: 20,
    padding: 15,
    height: 100,
    textAlignVertical: "top",
    color: "#979DAC",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    // shadowOffset:{width:0,height:2},
    shadowOpacity: 0.05,
    // shadowRadius:10,
    elevation: 1,
    marginTop: 25,
    width: 344,
    height: 157,
    left: 25,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 150,
    marginLeft: 80,
    marginTop: 30,
  },
  button: {
    backgroundColor: "white",
    borderColor: "#599CCA",
    borderWidth: 2,
    borderRadius: 75,
    alignItems: "center",
    width: 250,
    height: 58,
  },
  buttonText: {
    color: "#101318",
    fontSize: 16,
    fontWeight: "regular",
    marginTop: 17,
  },
  switchContainer: {
    // Aligns content to the right
    marginLeft: -50,
    paddingRight: 35,
    //backgroundColor:'yellow',
  },
  switchStyle: {
    transform: [{ scaleX: 2 }, { scaleY: 1.5 }], // Example to change switch size
  },

  questionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  left: {
    width: 350,
  },

  right: {},

  question1: {
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 32,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
  }
});

export default styles;
