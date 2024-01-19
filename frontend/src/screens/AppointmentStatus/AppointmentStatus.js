import { Text, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateCard from '../../components/Card/CreateCard'
import styles from './styles'
import ButtonGroup from '../../components/Button/ButtonGroup'



AppointmentStatus = () => {
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
      status:'Accepted.',
    },
    {id:4, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Accepted.',
    },
    {id:5, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Accepted.',
    },
    {id:6, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      time:'05.30 PM.',  
      date:'12/01/2024.' , 
      status:'Accepted.',
    }
  ];
  const[state, setState] = useState(0);
  return (
  <ScrollView>
    <SafeAreaView style={{margin:25}}>
      
      <Text style={styles.header}>Appointments</Text>
      <Text style={styles.descript1}>Review and manage appointments.</Text>
      
      <ButtonGroup/>
      
      <Text style={styles.descript2}>Appointment Status.</Text>

      <FlatList data={stateList} 
      renderItem={({item}) => (
        <CreateCard 
          image={item.image} 
          title={item.title}
          cardName={'AppointmentStatus'}
          time={item.time}
          date={item.date}
          status={item.status}
          />
      )} />
      
    </SafeAreaView>
  </ScrollView>
  
  )
}

export default AppointmentStatus
