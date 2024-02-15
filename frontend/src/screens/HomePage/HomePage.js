import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'

const HomePage = () => {

    
    return (
        <View style={style.contains}>
            <HeaderSub headLine={'Thishakya Perera'} subHeadLine={'80 total post'} />
        </View>
    )
    
}

const style = StyleSheet. create({
    contains: {

    }
})

export default HomePage;