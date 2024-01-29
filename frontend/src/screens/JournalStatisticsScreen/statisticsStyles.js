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
        marginTop:40,
        color:'#2C2E33',
        fontSize:15,
        fontWeight:'400',
        paddingBottom:10
        
    },
    pns:{
        flexDirection:'row',
        marginTop:32,
        marginLeft:30,
        

    },

    align:{
    
    },
    pnsTitle:{
        fontSize:11,
        color:'#5C677D',
        fontWeight:'400',
        marginLeft:8,
        position:'absolute'
    },

    pns1:{
        flexDirection:'row',
        marginTop:-15,
        marginLeft:150,
        // alignContent:'center',

    },
    pns2:{
        flexDirection:'row',
        marginTop:-15,
        marginLeft:270,
        // alignContent:'center',

    },

    background:{
        
    }
   


});

export default styles;