import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImmediateCurrentMoodInput from "../../screens/ImmeidateMoodInputScrren/MoodInputScreen"


const stack = createNativeStackNavigator();

const CurrentMoodInput = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='CurrentMoodInputScreen' component={ImmediateCurrentMoodInput} /> 
      
    </stack.Navigator>

  )
}

export default CurrentMoodInput

