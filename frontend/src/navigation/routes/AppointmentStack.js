import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import AvailableDoctors from '../../screens/Specialists/AvailableDoctors';
import MakeAppointment from '../../screens/MakeAppointment/MakeAppointment';
import AppointmentStatus from '../../screens/AppointmentStatus/AppointmentStatus';
import SearchEngine from '../../screens/search/search';


const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='AvailableDoctors' component={AvailableDoctors} />
      <stack.Screen name='MakeAppointment' component={MakeAppointment} />
      <stack.Screen name='AppointmentStatus' component={AppointmentStatus} />
      {/* <stack.Screen name='search' component={SearchEngine} /> */}
      
      
      
      
      
      
    </stack.Navigator>

  )
}

export default HomeStack
