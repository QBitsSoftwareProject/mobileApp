import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
    timeBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    },
    inputBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    timeText:{
        fontSize:14,
        fontWeight:'400',
        color:'#40495B'

    },
    timeInput:{
        marginHorizontal:5,
        borderWidth:1,
        paddingHorizontal:5,
        height:35,
        width:80,
        borderRadius:10,
        borderColor:'rgba(151,157,172,0.6)',
        textAlign:'center',
    },
    hiddenImg:{
        height:30,
        width:30,
    }
})