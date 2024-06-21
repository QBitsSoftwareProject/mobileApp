import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:25
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    logoFrame:{
       borderRadius:250,
       borderWidth:10,
       borderColor:'white',
       backgroundColor:'transparent',
       marginTop:85,
       maxHeight:230,
       maxWidth:230,
       alignItems:'center',
       justifyContent:'center'
    },
    logoText:{
        fontSize:48,
        fontWeight:'400',
        color:'white'
    },
    headText:{
        fontSize:20,
        fontWeight:'500',
        color:'white',
        marginTop:15
    },
    wrapper:{
        height:200,
        marginVertical: 64,
       
    },
    pagination:{
        backgroundColor:'transparent', 
        position:'absolute', 
        top:0, 
        alignItems:'flex-end', 
        height:200
    }, 
    slideBox:{
        backgroundColor:'transparent',
        border:'none',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        
    },
    quoteText:{
        fontSize:14,
        fontWeight:'400',
        color:'white',
        textAlign:'center',
        lineHeight:18,
       
    },
    btnBox:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
  
    },
    btn:{
        width:140,
        height:50,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    btnText:{
        fontSize:14,
        fontWeight:'500',
        color:'white',
    },
    guestText:{
        fontSize:14,
        fontWeight:'400',
        color:'white',
        textDecorationLine:'underline',
        marginTop:32,
        padding:10
    },
    bottomText:{
        fontSize:14,
        fontWeight:'400',
        color:'#D9D9D9',
        position:'absolute',
        bottom:15,
        opacity:0.6
    }
})