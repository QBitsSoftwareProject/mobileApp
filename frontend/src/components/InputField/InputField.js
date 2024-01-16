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
        

        <View style={{flex:1,}}>
            <TextInput 
                placeholder={props.placeHolder}
                style={{
                    backgroundColor:'white',
                    height:props.type==='textField' ? 150:50,
                    width:'100%',
                    padding:10,
                    borderRadius:10,
                    borderWidth:1,
                    borderColor:'rgba(151,157,172,0.6)',
                    textAlignVertical:props.type==='textField' ? 'top': 'center'
                }}
                onChangeText={props.onChangeText}
                multiline={props.type==='textField' ? true:false}
               
                />
        </View>
    </View>
  )
}

export default InputField