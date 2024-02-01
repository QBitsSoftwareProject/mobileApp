import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'

const Mindrelaxinmethod =() => {

 

    return (
      <View>
        <HeaderSub headLine = {"Suggestions"} subHeadLine={"Explore personalized recommendations"}/>
        <ExpandableCard/>
        <ExpandableCard/>
      </View>
    )

    }



export default Mindrelaxinmethod
