import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import AvailableDoctors from '../../screens/Specialists/AvailableDoctors';
import MakeAppointment from '../../screens/MakeAppointment/MakeAppointment';
import AppointmentStatus from '../../screens/AppointmentStatus/AppointmentStatus';
import App from '../../screens/TestOne/Test'


const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      {/* <stack.Screen name='HomeScreen' component={AvailableDoctors} /> */}
      <stack.Screen name='HomeScreen' component={MakeAppointment} />
      {/* <stack.Screen name='HomeScreen' component={AppointmentStatus} /> */}
      {/* <stack.Screen name='HomeScreen' component={App} /> */}
      
      
      
      
    </stack.Navigator>

  )
}

export default HomeStack

