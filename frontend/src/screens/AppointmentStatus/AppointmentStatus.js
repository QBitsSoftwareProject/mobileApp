import { Text, FlatList, ScrollView ,View} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateCard from '../../components/Card/CreateCard'
import styles from './styles'
import ButtonGroup from '../../components/Button/ButtonGroup'
import HeaderSub from '../../components/HeaderSub/HeaderSub'



const AppointmentStatus = () => {
  const stateList = [
    {id:1, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Accepted.',
    },
    {id:2, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Accepted.',
    },
    {id:3, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Rejected.',
    },
    {id:4, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Canceled.',
    },
    {id:5, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Accepted.',
    }
  ];
  const[state, setState] = useState(0);
  
  return (
  <View>
    <HeaderSub headLine={'Appointment'}  subHeadLine={'Review and manage appointment'}/>
        <SafeAreaView style={{margin:25}}>
            
        <ButtonGroup/>
        
        <Text style={styles.descript2}>Appointment Status.</Text>

        <View style = {{marginBottom:60,height:500}}>
          <FlatList  data={stateList} 
            renderItem={({item}) => (
            <CreateCard 
              image={item.image} 
              title={item.title}
              cardName={'AppointmentStatus'}
              time={item.time}
              date={item.date}
              status={item.status} />
                )} 
            />
        </View>
      
        
      </SafeAreaView>
  
  </View>
  )
}

export default AppointmentStatus
