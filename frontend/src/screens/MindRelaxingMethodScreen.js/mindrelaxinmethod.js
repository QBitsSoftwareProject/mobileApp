import React, { useState ,useEffect} from 'react'
import { Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'
import { CustomButton } from '../../components/MindRelaxingMethod/DoubleButton';
import { useNavigation } from '@react-navigation/native';
import { fetchMindRelaxingMethod } from '../../services/mindRelaxingMethodService/mindRelaxingMethodService';


const Mindrelaxinmethod =() => {

  const [userID, setUserId] = useState('');
  

    useEffect(() => {

  setUserId('214012H'); 
  
}, [userID]);

const navigation = useNavigation();



  //still not merge to stress level assessment branch so assing a valu yo stress level
  let yourMark;
  yourMark = 15;
  const [Data,setData] = useState([]);


  //to fetch methods by stress level
  useEffect (() => {

      const fetchData = async () => {
      try{
          
          const response = await fetchMindRelaxingMethod();

          
          setData(response);

      }catch(error){
          console.log(error);
      }
  };

  fetchData();

  
     
  },[])

  //filter method according to the stress level
  const filteredData = Data.filter(item => item.mark === yourMark);   

  const resultBtnFunction = () => {
    // navigation.navigate('DisplayResultScreen');
    navigation.navigate("StressLevel", { screen: 'DisplayResultScreen' });
  };

  const handleTryLaterBtn = () => {
    navigation.navigate('HomeScreen');
  }

     
    return (
      <View>
        <HeaderSub headLine = {"Suggestions"} subHeadLine={"Explore personalized recommendations"} back = 'HomeScreen'/>
        
        

      <ScrollView>

      <CustomButton resultBtnFunction ={resultBtnFunction}></CustomButton>

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

        onPress={handleTryLaterBtn}

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

        <Text style = {{alignSelf:'center'}}>Try Later</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    
      </View>

    )

    }



export default Mindrelaxinmethod
