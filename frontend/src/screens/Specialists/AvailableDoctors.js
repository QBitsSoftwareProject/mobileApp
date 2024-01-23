import { Text, ScrollView, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import style from './style'
import CreateCard from '../../components/Card/CreateCard'
import ButtonGroup from '../../components/Button/ButtonGroup'
import HeaderSub from '../../components/HeaderSub/HeaderSub'


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
  },
  {id:5, 
    image:require("../../assets/images/kitharringtonhair.jpg"),
    title:'Dr. B.M. Weerasinghe.', 
    university:"MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  }
]; 

  return (
    <View>
      <HeaderSub headLine={'Doctor appointment'}  subHeadLine={'Explore and find the perfect specialist.'}/>
        
          <SafeAreaView style={{margin:25}}>
           
            
            <ButtonGroup/>

            <Text style={style.descript2}>Available Doctors.</Text>
            <ScrollView> 
              <View style={{ marginBottom: 60 }}>
              
                  {docList.map(( item ) => (
                    <CreateCard
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      cardName={'AvailableDoc'}
                      university={item.university}
                      regno={item.regno}
                      hospital={item.hospital}
                    />
                  ))}
                
              </View>
            </ScrollView>  
          </SafeAreaView>
    
    </View>
     

    )
}


export default AvailableDoctor;