import React, { useState ,useEffect} from 'react'
import { Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'
import data from './dummyData';
import { CustomButton } from '../../components/MindRelaxingMethod/DoubleButton';
import FetchMethod from './fetchMethods';
import axios from 'axios';

const Mindrelaxinmethod =() => {

  let yourMark;
  yourMark = 25;
  const [Data,setData] = useState([]);

  useEffect (() => {

      const fetchData = async () => {
      try{
          let url;

          url = "http://10.10.0.85:8070/method/get-method"

          const response = await axios.get(url);
          setData(response.data);

      }catch(error){
          console.log(error);
      }
  };

  fetchData();

  // console.log(Data)
     
  },[])

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
