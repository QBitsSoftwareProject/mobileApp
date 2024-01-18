import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginTop:25,
        marginLeft:25,
        fontSize:24,
        fontWeight:"bold",
        color:"black",
    },
    descript1: {
        marginTop:10,
        marginLeft:25,
        fontSize:16,
        fontWeight:"400",
        color:"black"
    },
    buttons: {
      paddingVertical:12,
      paddingHorizontal:55,
      alignSelf:'center',
      flexDirection: 'row',
      
      
    },
    button1: {
      width:110,
      height:40,
      borderRadius: 20,
      backgroundColor: "#ffff",  
     
     
    },
  
    button2: {
      height:40,
      width:110,
      borderRadius: 20,
      backgroundColor: "#5296C5",
      marginStart:-30
     
    },
    buttonText1: {
      textAlign: 'center',
      padding:10
    },
    buttonText2: {
      textAlign: 'center',
      padding:10
    },
    descript2: {
      marginTop:10,
      marginLeft:25,
      fontSize:18,
      fontWeight:"500",
      color:"black"
  },
    title: {
      paddingLeft:110,
      marginTop:-75,
      fontSize:16,
      fontWeight: "bold",
      },
    description: {
    paddingLeft:110,
    marginTop:5,
    fontSize:14,
    fontWeight: "400",
    lineHeight:20
      },
    image:{
      height:74,
      width:74,
      borderColor:"black",
      borderRadius:100,
      marginVertical:5,
      marginHorizontal:5
    }
})

export default styles