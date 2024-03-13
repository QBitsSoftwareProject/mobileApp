import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const RegularButton = (props) => {
   
    return(
        <View>
            <TouchableOpacity style={{width:334, height:58, backgroundColor:'#5296C5', borderRadius:10, justifyContent:'center',alignItems:'center'}}
             onPress={() => {
                
             }}>
                <Text style={{color: '#fff', fontSize:16, fontWeight:500}}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegularButton