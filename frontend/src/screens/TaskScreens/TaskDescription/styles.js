import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2F3F5',
        marginHorizontal:25,
    },
    backBtn:{
        marginTop:50
        
    },
    headTextBox:{
        alignItems:'center',
        marginTop:10
    },
    task:{
        fontSize:18,
        fontWeight:'500',
        color:'#979DAC',
        marginBottom:7
    },
    taskHead:{
        fontSize:32,
        fontWeight:'400',
        color:'#101318',
        maxWidth:200,
        
    },
    bar:{
        flexDirection: 'column',
        width: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 4,
            height: 2,
        },
        shadowOpacity: 0.5,
        elevation: 1,
    },

    stepContainer:{
        flexDirection:'row',
        alignItems:'center',
        
        marginBottom:32,
        backgroundColor:'transparent'
        
    },
    stepBox:{
        width: 55,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
       
        marginRight:32,

    },
    stepText:{
        fontSize: 14,
        fontWeight: '400',
        color: 'white',
        width: 30,
        textAlign: 'center',
    },
    stepDescription:{
        padding:20,
        borderRadius:30,
        backgroundColor:'white',
        elevation:1
    },
    btn:{
        height:58,
        width:258,
        borderRadius:20,
        borderColor:'#4A90BF',
        borderWidth:2,
        alignItems:"center",
        justifyContent:'center',
    },
    btnText:{
        fontSize: 14,
        fontWeight: '500',
        color: '#40495B',
    },
    descrptionText:{
        fontSize: 14,
        fontWeight: '400',
        color: '#101318',
        width:230,
    }
    
    
})
