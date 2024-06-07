import React, { useState ,useEffect} from 'react'
import { Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'
import { CustomButton } from '../../components/MindRelaxingMethod/DoubleButton';
import axios from 'axios';

const Mindrelaxinmethod =() => {

  //still not merge to stress level assessment branch so assing a valu yo stress level
  let yourMark;
  yourMark = 15;
  const [Data,setData] = useState([]);


  //to fetch methods by stress level
  useEffect (() => {

      const fetchData = async () => {
      try{
          let url;

          url = "http://192.168.1.26:3000/method/get-method"

          const response = await axios.get(url);
          setData(response.data);

      }catch(error){
          console.log(error);
      }
  };

  fetchData();

  // console.log(Data)
     
  },[])

  //filter method according to the stress level
  const filteredData = Data.filter(item => item.mark === yourMark);


     
    return (
      <View>
        <HeaderSub headLine = {"Suggestions"} subHeadLine={"Explore personalized recommendations"}/>
        
        

      <ScrollView>

      <CustomButton></CustomButton>

      {filteredData.map((item) => (
          <ExpandableCard
            key={item._id}
            methodname={item.resouceName}
            contentText={item.discription}
            imgLink={item.imageURL}
            methodType={item.methodType}
            rUrl = {item.resourceURL}
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
