import {styleSheet} from "react-native";
const styles = styleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
      },
      header: {
        backgroundColor: "#4A90BF",
        width:574.83,
        height:189
      },
      title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        paddingTop:80,
        paddingLeft:25
      },
      subtitle: {
        fontSize: 18,
        color: "#fff",
        paddingTop:7,
        paddingLeft:25,
        
      },
      buttons: {
        flexDirection: "row",
        paddingTop:32,
        paddingLeft:110,
        paddingBottom:32
    
      },
      button1: {
        backgroundColor: "#5296C5",
        padding: 10,
        borderRadius: 20,
        width:112,
        height:40
      },
    
      button2: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 20,
        height:40,
        width:112
      },
    
    
      buttonText1: {
        textAlign:'center',
        fontSize: 14,
        color: "#fff",
      },
    
      buttonText2: {
        textAlign:'center',
        fontSize: 14,
        color: "#5C677D",
      },
      feeling: {
        marginTop:0,
        marginLeft: 25,
        
      },
      label: {
        fontSize: 18,
        fontWeight: 'medium',
        color: "#101318",
      },
      emoji: {
        fontSize: 32,
        marginHorizontal: 5,
        paddingTop:15,
        paddingBottom:32
    
      },
      input: {
       paddingTop:0,
       marginLeft:25,
       fontSize:18,
       paddingBottom:32
    
      },
      textInput: {
    
        backgroundColor:'#ffffff',
        borderRadius: 20,
        paddingLeft:25,
        fontSize: 14,
        width:360,
        height:69,
        shadowOpacity:0.25,
        elevation:4,
        color:'#7D8597'
      },
      textArea: {
        
        backgroundColor:'#ffffff',
        borderRadius: 20,
        paddingLeft:25,
        fontSize: 14,
        height: 200,
        width:360,
        shadowOpacity:0.25,
        elevation:4,
        color:'#7D8597',
        
    
      },
      stress: {
        marginHorizontal: 20,
        marginVertical: 10,
      },
      circles: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
        paddingBottom:32
      },
      circle: {
        width: 45,
        height: 45,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      },
      stress: {
        fontSize: 11,
        fontWeight: 'normal',
        color: "#40495B",
        
        
      },
      create: {
        padding:10,
        backgroundColor: "#ffffff",
        borderColor:'#5FA1CE',
        borderWidth:2,
        width:289,
        height:50,
        borderRadius: 75,
        marginLeft:58
        
      },
      createText: {
        paddingTop:3,
        fontSize: 16,
        color:'#101318',
        textAlign:'center'
      },

});

export default styles;