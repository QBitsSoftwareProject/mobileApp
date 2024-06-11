import {StyleSheet} from "react-native";
const styles = StyleSheet.create({

    container:{
         flex:1,
         margin:25
    },
    header:{
        marginTop:103,
        fontSize:32,
        

    },
    img:{
        width:200,
        height:200,
        opacity:0.8,
        borderRadius:200,
        alignSelf:'center',
        marginTop:15,
        // backgroundColor:'red',
        marginBottom:15
    },
    tittle:{
        marginTop:15,
        color:'#101318',
        fontSize:16,
        fontWeight:'400',
        marginBottom:15
        
        
    },
    // pns:{
    //     flexDirection:'row',
    //     marginTop:32,
    //     marginLeft:30,
        

    // },

    // align:{
    
    // },
    // pnsTitle:{
    //     fontSize:11,
    //     color:'#5C677D',
    //     fontWeight:'400',
    //     marginLeft:8,
    //     position:'absolute'
    // },

    // pns1:{
    //     flexDirection:'row',
    //     marginTop:-15,
    //     marginLeft:150,
    //     // alignContent:'center',

    // },
    // pns2:{
    //     flexDirection:'row',
    //     marginTop:-15,
    //     marginLeft:270,
    //     // alignContent:'center',

    // },

    // background:{
        
    // }

    row: {
        flexDirection: 'row',
        marginTop:15,
        
        
      },
      pns: {
        marginLeft:25,
        marginRight:25,
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal:32
      },
      align: {
        alignItems: 'center',
      },
      pnsTitle: {
        fontSize: 11,
        fontWeight: '300',
        marginLeft:10
        
      },
   


});

export default styles;