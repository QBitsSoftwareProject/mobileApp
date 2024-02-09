import { Text, ScrollView, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './style'
import CreateCard from '../../components/Card/CreateCard'
import ButtonGroup from '../../components/Button/ButtonGroup'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { useNavigation } from '@react-navigation/native'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useState } from 'react'


const AvailableDoctor = () => {
  const navigation=useNavigation();

  const docList = [
    {id:1, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      university:"MBBS, University of Colombo.",
      regno: "234589.",
      hospital: "Anuradhapura Genaral Hospital.",
    },
    {id:2, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Amarasinghe.', 
      university:"MBBS, University of Colombo.",
      regno: "234589.",
      hospital: "Anuradhapura Genaral Hospital.",
    },
    {id:3, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Samarasinghe.', 
      university:"MBBS, University of Colombo.",
      regno: "234589.",
      hospital: "Anuradhapura Genaral Hospital.",
    },
    {id:4, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Jayasinghe.', 
      university:"MBBS, University of Colombo.",
      regno: "234589.",
      hospital: "Anuradhapura Genaral Hospital.",
    },
    {id:5, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Ranasinghe.', 
      university:"MBBS, University of Colombo.",
      regno: "234589.",
      hospital: "Anuradhapura Genaral Hospital.",
    }
  ]; 

const pressHandler = () => {
  navigation.navigate('MakeAppointment')
};

const { input, setInput } = useState();

  return (
    <View>
      <HeaderSub headLine={'Doctor appointment'}  subHeadLine={'Explore and find the perfect specialist.'}/>
        
          <SafeAreaView style={{margin:25}}>
           
            <ScrollView style={{height:500}}>   
              
              <ButtonGroup/>

              <SearchBar data={docList} input={input} setInput={setInput}/>
              
              <View style={{marginHorizontal:15}}>
                  <Text style={style.descript2}>Available Doctors.</Text>
              </View>
  
              <View style={{ marginBottom: 80}}>
                {docList.map(( item ) => (
                  <CreateCard 
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  cardName={'AvailableDoc'}
                  university={item.university}
                  regno={item.regno}
                  hospital={item.hospital} onPress={pressHandler} />
                ))}  
              </View>
            
            </ScrollView>  
          
          </SafeAreaView>
    
    </View>
     

    )
}


export default AvailableDoctor;