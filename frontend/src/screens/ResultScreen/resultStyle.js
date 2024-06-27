import { StyleSheet } from "react-native";

const ResultScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    height: 72,
    backgroundColor: "white",
    width: 81,
    marginLeft: 85,
    borderRadius: 15,
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
  },

  tooglebtn: {
    marginTop: 20,
    paddingVertical: 15,
    width: 144,
    height: 48,
    borderRadius: 20,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#4A90BF",
    backgroundColor: "white",
  },

  pccText: {
    alignSelf: "center",
    fontSize: 16,
    marginTop: 32,
    marginHorizontal: 25,
    color: "#101318",
  },

  instructionimg: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    marginRight: 30,
  },

  backgroungimg: {
    width: 251,
    height: 220,
    alignSelf: "center",
  },

  textStressLvl: {
    alignSelf: "center",
    fontSize: 16,
    marginTop: 32,
  },

  textStressLvl2: {
    alignSelf: "center",
    fontSize: 16,
    marginTop: 15,
  },

  textNullStressLvl: {
    alignSelf: "center",
    fontSize: 14,
    marginTop: 15,
  },

  historybtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingVertical: 10,
    width: 144,
    height: 48,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4A90BF",
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 30,
  },

  doublebtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 10,
    width: 112,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default ResultScreenStyle;
