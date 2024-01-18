import { View, Text, TouchableOpacity, onPress, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateCard from '../../components/Card/CreateCard'
import styles from './styles'



AppointmentStatus = () => {
  const stateList = [
    {id:1, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      description:'Time: 05.30 PM. \n Date: 12/01/2024. \n Status: Accepted.',
    },
    {id:2, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      description:'Time: 07.30 PM. \n Date: 15/01/2024. \n Status: Rejected.',
    },
    {id:3, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      description:'Time: 05.30 PM. \n Date: 16/01/2024. \n Status: Accepted.',
    },
    {id:4, 
      image:require("../../assets/images/kitharringtonhair.jpg"),
      title:'Dr. B.M. Weerasinghe.', 
      description:'Time: 06.00 PM. \n Date: 12/01/2024. \n Status: Cancel.'}
  ];

  const renderItem = ({ item }) => (
    <CreateCard>
      <Image source={item.image}style={styles.image} /> 
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
    </CreateCard>
  );

  const keyExtractor = (item) => item.id;

  return (
    <TouchableOpacity>
    <SafeAreaView>
      
      <Text style={styles.header}>Appointments</Text>
      <Text style={styles.descript1}>Review and manage appointments.</Text>
      
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>appointments</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.descript2}>Appointment Status.</Text>

      <FlatList data={stateList} renderItem={renderItem} keyExtractor={keyExtractor} />
        
      
    </SafeAreaView>
    </TouchableOpacity>
  
  )
}

export default AppointmentStatus
