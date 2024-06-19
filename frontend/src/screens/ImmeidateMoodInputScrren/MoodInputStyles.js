import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backBtn:{
        // marginTop:50,
        margin:25
        
    },

    backPng : {
        width:53,
        height:53

    },

    horivontalBar : {
        width:'88%',
        height:10,
        backgroundColor:'#4ABFB4',
        borderRadius:15,
        alignSelf:'center',
        marginBottom:32
    },

    textArea: {
        // marginTop: 32,
        marginLeft:25,

    },

    textOne : {
        fontSize:16,
        lineHeight:24,
        fontWeight:'400',
        
    },

    imageArea : {
        alignSelf:'center',
        marginTop:15,
    },

    mainImage : {
        width:252,
        height:181,
    },

    imojiRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop:32,
        // marginBottom:110,
        // height: 150,
          
      },
      leftImoji: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height:110,
        marginRight: 15,
        marginLeft:45,
        borderRadius:15,
        
        
      },
      rightImoji: {
        flex: 1,
        backgroundColor: 'white', // Change the background color if needed
        justifyContent: 'center',
        alignItems: 'center',
        height:110,
        marginRight:45,
        borderRadius:15,
      },

      imojiRowTwo: {
        flex: 1,
        flexDirection: 'row',
        marginTop:15,
        // marginBottom:110,
        height: 150,
          
      },

      optionImg : {
        width:70,
        height:70,
      },

      submitBtn : {
        width:144,
        height:48,
        backgroundColor:'white',
        marginBottom:20,
        alignSelf:'center',
        borderRadius:20,
        borderWidth:1,
        borderColor:'#4A90BF',
        alignItems:'center',
        justifyContent:'center'
      },

      btnText : {
        fontSize:14
      },

      selectedOption: {
        backgroundColor: '#ABF4DF',
      }

      
    
})
export default styles