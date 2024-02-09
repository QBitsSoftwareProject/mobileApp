import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather  from 'react-native-vector-icons/Feather';

const SearchBar = ({data, input, setInput}) => {
  return (
    <View style={styles.asembler}>
        <View style={styles.containerBox}>
            <TextInput style={styles.input} value={input} placeholder='Search'/>
        </View>
        
        <View style={styles.buttonPress}>
            <TouchableOpacity>
                <Feather style={styles.icon} name = 'search' size={20} />
            </TouchableOpacity>
        </View>
        
    </View>
   
    
  )
}

const styles = StyleSheet.create ({
    asembler: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'center',
    },
    containerBox: {
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'#C0C0C0',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
    },
    feather: {
        marginLeft: 1,
        marginRight: 4,
    },
    input: {
        marginLeft:10,
        marginTop: 5,
    },
    buttonPress: {
        height:40,
        width:60,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
      color: '#5C677D',
      
    //   borderWidth: 1,
    //   borderColor:'#4A90BF',
    //   backgroundColor:'#4A90BF',
    //   borderRadius: 100
    }
})

export default SearchBar