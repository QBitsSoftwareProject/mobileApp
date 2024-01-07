import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    cardBox:{
        backgroundColor:'white',
        minHeight:112,
        padding:15,
        borderRadius:20,
    },
    contain:{
        flex:1,
        flexDirection:'row',
        
    },
    textSection:{
        marginLeft:15,
    },
    headText:{
        fontSize:18,
        fontWeight:'500',
        color:'#40495B'
    },
    subText:{
        fontSize:12,
        fontWeight:'500',
        color:'#979DAC'
    },
    bottomSection:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:15,
        marginTop:15
        
    },
    completnessText:{
        fontSize:10,
        fontWeight:'500',
        color:'#979DAC',
        marginRight:7
    },
    takeBtn:{
        height:35,
        width:100,
        borderRadius:20,
        borderWidth:1,
        borderColor:'rgba(151,157,172,0.5)',
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        fontSize:14,
        fontWeight:'500',
        color:'#40495B',
    }

})