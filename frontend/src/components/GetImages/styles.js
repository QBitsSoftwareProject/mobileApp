import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:14,
    fontWeight:'400',
    color:'#40495B',
    marginBottom:7,
  },
  imageBtn:{
    width:170,
    height:40,
    backgroundColor:'#45B4FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  btnText:{
    fontSize:14,
    fontWeight:'400',
    color:'white',
  },
  imageContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:15
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius:10,
  },
});