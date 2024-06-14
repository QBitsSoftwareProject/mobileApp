import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mindrelaxinmethod from '../../screens/MindRelaxingMethodScreen.js/mindrelaxinmethod';


const stack = createNativeStackNavigator();

const MindRelaxingMethodStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='MindrelaxinmethodScreen' component={Mindrelaxinmethod} /> 
      
    </stack.Navigator>

  )
}

export default MindRelaxingMethodStack

