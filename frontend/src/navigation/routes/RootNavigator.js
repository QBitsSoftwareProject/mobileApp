import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack'
import StressLevelStack from './StressLevelStack';
import MethodSuggessionStack from './MindRelaxingMethodStack';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <RootStack.Screen name='Home' component={HomeStack} /> 
      <RootStack.Screen name="StressLevel" component={StressLevelStack} />
      <RootStack.Screen name="MindRelaxingMethod" component={MethodSuggessionStack} />
   
      
    </stack.Navigator>

  )
}

export default RootNavigator;

