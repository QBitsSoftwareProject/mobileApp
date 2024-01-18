import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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
      backgroundColor: "#5296C5",  
    },
  
    button2: {
      height:40,
      width:110,
      borderRadius: 20,
      backgroundColor: "#ffffff",
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
      color:"black",
      marginBottom: 15,
  },
    subHeader: {
      backgroundColor: "#2089dc",
      color: "white",
      textAlign: "center",
      paddingVertical: 5,
      marginBottom: 10,
    }
  })


export default style