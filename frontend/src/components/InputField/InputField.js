import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputField = (props) => {
  return (
    <View style={{marginBottom:32}}>
        <View>
            <Text 
                style={{
                    fontSize:14,
                    fontWeight:'400',
                    color:'#40495B',
                    marginBottom:7
                }}>

                {props.label}
            </Text>
        </View>
        

        <View style={{flexDirection:'row'}}>
            <TextInput 
                placeholder={props.placeHolder}
                style={{
                    backgroundColor:'white',
                    height:50,
                    width:'100%',
                    padding:10,
                    borderRadius:10,
                    borderWidth:1,
                    borderColor:'rgba(151,157,172,0.6)'
                }}
                />
        </View>
    </View>
  )
}

export default InputField