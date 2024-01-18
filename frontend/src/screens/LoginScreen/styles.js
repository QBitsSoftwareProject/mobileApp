import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:25,
    },
    contains:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        
        
    },
    inputField:{
        borderWidth:1,
        borderRadius:10,
        borderColor:"#4ABFB4",
        height:50,
        width:300,
        backgroundColor:'white',
        marginBottom:15,
        paddingHorizontal:10
    },
    loginBtn:{
        marginTop:32,
        backgroundColor:'#4ABFB4',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        height:50,
        width:300
    },
    loginText:{
        fontSize:14,
        fontWeight:'500',
        color:'white'
    },
    bottomBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        position:'absolute',
        bottom:15,
    },
    bottomText:{
        fontSize:14,
        fontWeight:'400',
        color:'#7D8597'
    }
})