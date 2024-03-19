import { View, Text, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const ButtonGroup = () => {
    const[selectedTab, setSelectedTab] = useState(0);
    return(
        <View style={{width:227, height:40, backgroundColor:'#fff', borderRadius:25, flexDirection:'row', alignSelf:'center'}}>
            <TouchableOpacity style={{width:113.5, height:40, backgroundColor: selectedTab == 0 ? '#5296C5' : '#fff', borderRadius:25, justifyContent:'center',alignItems:'center'}}
             onPress={() => {
                setSelectedTab(0)
            }}>
                <Text style={{color: selectedTab == 0 ?'#fff' : '#000', fontSize:18, fontWeight:700}}>List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:113.5, height:40, backgroundColor:selectedTab == 1 ? '#5296C5' : '#fff', borderRadius:25, justifyContent:'center',alignItems:'center'}} 
            onPress={() => {
                setSelectedTab(1)
            }}>
                <Text style={{color:selectedTab == 1 ?'#fff' : '#000', fontSize:18, fontWeight:700}}>Appointment</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ButtonGroup