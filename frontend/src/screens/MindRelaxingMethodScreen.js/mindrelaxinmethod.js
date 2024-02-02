import React, { useState } from 'react'
import { Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'
import data from './dummyData';

const Mindrelaxinmethod =() => {

      const imgurl1 = 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-9e556.appspot.com/o/images%2Fcropped-img_0550.webp87e20a44-2fc9-4528-b7bb-1c120eedddb0?alt=media&token=2e92ba76-135e-4cfb-b4ce-75f0e252930b';

      const renderItem = ({ item,index }) => (
        <ExpandableCard method={item.title} methodname = {item.name} contentText = {item.description} imgLink = {item.img}
        laststyle={{ marginBottom: index === data.length - 1 ? 500 : 0 }} />
      );
//           
    return (
      <View>
        <HeaderSub headLine = {"Suggestions"} subHeadLine={"Explore personalized recommendations"}/>
        
        <View>
      <TouchableOpacity style = {{backgroundColor:'yellow'}}>
        <Text>hdrf</Text>
      </TouchableOpacity>
    </View>

      <ScrollView>
    {data.map((item, index) => (
    <ExpandableCard
      key={item.id}
      method={item.title}
      methodname={item.name}
      contentText={item.description}
      imgLink={item.img}
      style={{ marginBottom: index === data.length - 1 ? 500 : 0 }}
    />
  ))}

    <View style = {{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity 
      style = {{backgroundColor:'white',
      marginBottom:370,
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
