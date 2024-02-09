import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import AppointmentStack from '../routes/AppointmentStack'



const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='AvailableDoctors' component={AppointmentStack} />
      
      
      
      
      
      
    </stack.Navigator>

  )
}

export default HomeStack

