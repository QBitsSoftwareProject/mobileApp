import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import Mindrelaxinmethod from '../../screens/MindRelaxingMethodScreen.js/mindrelaxinmethod';

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}
      <stack.Screen name='HomeScreen' component={Mindrelaxinmethod} /> 
   
      
    </stack.Navigator>

  )
}

export default HomeStack

