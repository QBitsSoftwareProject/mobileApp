import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contains:{
        height:250,
        borderBottomRightRadius:80,
        zIndex:100
    },
   
    headlineTxt:{
        fontWeight: '700',
        fontSize: 32,
        color: 'white',
        marginTop:65,
        
    },
    subHeadlineTxt:{
        fontWeight:'400',
        fontSize:16,
        color:'white',
        marginTop:7,
        maxWidth:300,
       
    },
    backImg:{
        paddingRight:25,
        paddingLeft:25,
        height:250,
       
    },
    profileFrame:{
        width:100,
        height:100,
        borderRadius:50,
        overflow:'hidden',
        borderWidth:4,
        borderColor:'white',
        
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    
})
export default styles