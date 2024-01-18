import { View, Text, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const ButtonGroup = () => {
    const[selectedTab, setSelectedTab] = useState(0);
    return(
        <View style={{width:100, height:55, borderWidth:0.5, backgroundColor:'#fff', borderRadius:15, flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{width:50, height:55, backgroundColor: selectedTab == 0 ? '#5296C5' : '#fff', borderRadius:15, justifyContent:'center',alignItems:'center'}}
             onPress={() => {
                setSelectedTab(0)
            }}>
                <Text style={{color: selectedTab == 0 ?'#fff' : '#000', fontSize:18, fontWeight:700}}>List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:50, height:55, backgroundColor:selectedTab == 1 ? '#5296C5' : '#fff', borderRadius:15, justifyContent:'center',alignItems:'center'}} 
            onPress={() => {
                setSelectedTab(1)
            }}>
                <Text style={{color:selectedTab == 1 ?'#fff' : '#000', fontSize:18, fontWeight:700}}>Appointment</Text>
            </TouchableOpacity>

        </View>
    )
}

export default ButtonGroup