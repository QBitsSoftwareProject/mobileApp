import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const TransparentButton = () => {
   
    return(
        <View>
            <TouchableOpacity onPress={() => {

            }}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Post</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    btn:{
        width:334, 
        height:58, 
        backgroundColor:'#5296C5',
        borderRadius:10, 
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    btnText: {
        color: '#fff', 
        fontSize:16, 
        fontWeight:'500'
    }
})


export default TransparentButton