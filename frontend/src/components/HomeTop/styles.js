import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contains: {
    height: 200,
    zIndex: 100,
    width: "100%",
    // borderBottomLeftRadius: 40,
    borderBottomRightRadius: 50,
    
  },

  headlineTxt: {
    fontWeight: "700",
    fontSize: 32,
    color: "white",
    marginTop: 25,
  },
  subHeadlineTxt: {
    fontWeight: "400",
    fontSize: 16,
    color: "white",
    marginTop: 7,
    maxWidth: 400,
  },
  backImgView: {
    position: "absolute",
    right: 0,
  },

  backImg: {
    height: 210,
    width: 210,
  },
  profileFrame: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "white",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default styles;
