import React, { useState } from 'react'
import { Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'
import data from './dummyData';
import { CustomButton } from '../../components/MindRelaxingMethod/DoubleButton';

const Mindrelaxinmethod =() => {

     
    return (
      <View>
        <HeaderSub headLine = {"Suggestions"} subHeadLine={"Explore personalized recommendations"}/>
        
        

      <ScrollView>

      <CustomButton></CustomButton>

    {data.map((item, index) => (
    <ExpandableCard
      key={item.id}
      methodname={item.name}
      contentText={item.description}
      imgLink={item.img}
      methodType = {item.mtype}
    />
  ))}

    <View style = {{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity 
      style = {{backgroundColor:'white',
      marginBottom:350,
      width:289,
      height:58,
      justifyContent:'center',
      borderRadius:50,
      borderColor:'#74A9CD',
      borderWidth:1,
      marginTop:22


      
      }}>

        <Text style = {{alignSelf:'center'}}>Try Again</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    
      </View>

    )

    }



export default Mindrelaxinmethod
