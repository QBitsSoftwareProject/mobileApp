import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 370,
    width: "100%",
    borderRadius: 20,
  },
  carouselContainer: {
    display:"flex",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginHorizontal:10,
  },
  imgContainer: {
    height: 270,
  },
  image: {
    flex:1,
    height: "auto",
    borderRadius:20
  },
  textContainer: {
    marginTop: -75,
    backgroundColor: "white",
    width: "100%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 10,
    color: "#101318",
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10,
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "left",
    paddingLeft: 10,
  },
});

export default styles;
