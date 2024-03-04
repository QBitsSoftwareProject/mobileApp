import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: '#F2F3F5',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:25,
      
      
      
    },
    title1: {
      fontSize: 32,
      fontStyle:'semiBold',
      marginBottom: 5,
      paddingLeft:25,
      paddingTop:25,
  
      color:'#101318'
    },
    subtitle: {
      marginLeft:25,
      marginBottom: 62,
      fontSize: 18,
      color:'#101318'
    },
    
    // label: {
      
    //   fontSize: 16,
    //   marginLeft:25,
    //   //marginRight:82,
    //   color:'#101318',
    //   lineHeight:22
    // },

    textarea: {
      borderWidth: 0,
      borderRadius: 20,
      padding: 19,
      height: 100,
      textAlignVertical: 'top',
      color:'#979DAC',
      backgroundColor:'#FFFFFF',
      shadowColor:'#000',
      // shadowOffset:{width:0,height:2},
      shadowOpacity:0.05,
      // shadowRadius:10,
      elevation:1,
      marginTop:25,
      width:344,
      height:157,
      left:25
      
  
    },
   
  
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 115,
      marginLeft:80,
      marginTop:32
    },
    button: {
      backgroundColor: 'white',
      borderColor: '#599CCA',
      borderWidth: 2,
      borderRadius: 75,
      alignItems: 'center',
      width: 250,
      height: 58,
    },
    buttonText: {
      color: '#101318',
      fontSize: 16,
      fontWeight: 'regular',
      marginTop: 17,
    },
    switchContainer: {
      
      
       // Aligns content to the right
      marginLeft:-50,
      paddingRight:35,
      //backgroundColor:'yellow',

    },
    switchStyle: {

      transform: [{ scaleX: 2 }, { scaleY: 1.5 }], // Example to change switch size
      
    },

  

    questionSection: {
      flexDirection:'row',
      justifyContent:'space-between',

    },

    left: {
      width:350,
    },

    right :{

    },

  
   
    question1:{
      paddingLeft:25,
      paddingRight:25,
      fontSize:16,
      lineHeight:22,
      marginTop:32
   
  }
   
  });

export default styles;