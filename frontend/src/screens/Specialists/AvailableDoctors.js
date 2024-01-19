import { Text, FlatList, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './style'
import CreateCard from '../../components/Card/CreateCard'
import ButtonGroup from '../../components/Button/ButtonGroup'


const AvailableDoctor = () => {

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
    title:'Dr. B.M. Weerasinghe.', 
    university:"MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
  {id:3, 
    image:require("../../assets/images/kitharringtonhair.jpg"),
    title:'Dr. B.M. Weerasinghe.', 
    university:"MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
  {id:4, 
    image:require("../../assets/images/kitharringtonhair.jpg"),
    title:'Dr. B.M. Weerasinghe.', 
    university:"MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  }
]; 

  return (
  <ScrollView>
    <SafeAreaView style={{margin:25}}>
      
      <Text style={style.header}>Doctor appointment</Text>
      
      <Text style={style.descript1}>Explore and find the perfect specialist.</Text>
      
      <ButtonGroup/>

      <Text style={style.descript2}>Available Doctors.</Text>
   
      <FlatList data={docList} 
      renderItem={({item}) => (
        <CreateCard 
          image={item.image} 
          title={item.title}
          cardName={'AvailableDoc'}
          university={item.university}
          regno={item.regno}
          hospital={item.hospital}
          />
      )} />

    </SafeAreaView>
  </ScrollView>   

  );

};



export default AvailableDoctor;