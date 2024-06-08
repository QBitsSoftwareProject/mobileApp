import React, { useState ,useEffect} from 'react'
import { Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import ExpandableCard from '../../components/MindRelaxingMethod/ExpandCard'
import { CustomButton } from '../../components/MindRelaxingMethod/DoubleButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import axiosInstance from "../../api/axios";

const Mindrelaxinmethod =() => {

  const [userID, setUserId] = useState('');
    const [lastMark,setLastMark] = useState('');

    

    useEffect(() => {
  setUserId('214012H'); 
  fetchMark(userID);
  
}, []);

const navigation = useNavigation();


const fetchMark = async (userID) => {
  // const userid = userID;
  try {
    console.log('Fetching mark for userID:', userID);
    const response = await axiosInstance.get(`/mark/get-mark-by-id/${userID}`);
    
    const userData = response.data;


    if (userData.length > 0) {
      const mostRecentMark = userData[userData.length - 1].mark;
      console.log('Most Recent Mark:', mostRecentMark);
      setLastMark(mostRecentMark);
    } else {
      console.log('No user data found.');
    }
  } catch (err) {
    console.log('Error fetching mark:', err);
  }
};

  //still not merge to stress level assessment branch so assing a valu yo stress level
  let yourMark;
  yourMark = 15;
  const [Data,setData] = useState([]);


  //to fetch methods by stress level
  useEffect (() => {

      const fetchData = async () => {
      try{
          
          const response = await axiosInstance.get(`/method/get-method`);

          
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

  const resultBtnFunction = () => {
    navigation.navigate('DisplayResultScreen', {
      stresslevel:lastMark,
      userId: userID
    });
  };

  const handleTryLaterBtn = () => {
    console.log('ptressed')
    // navigation.navigate('');
  }

     
    return (
      <View>
        <HeaderSub headLine = {"Suggestions"} subHeadLine={"Explore personalized recommendations"}/>
        
        

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
