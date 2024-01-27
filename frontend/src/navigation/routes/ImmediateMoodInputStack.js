import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoodInputScreen from '../../screens/ImmeidateMoodInputScrren/MoodInputScreen';
const stack = createNativeStackNavigator();

const MoodInputStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='MoodInputScreen' component={MoodInputScreen} />
      
    </stack.Navigator>
  )
}

export default MoodInputStack