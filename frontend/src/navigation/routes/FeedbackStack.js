import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import Feedback from '../../screens/FeedbackScreen/Feedback';
const stack = createNativeStackNavigator();


const FeedbackStack = () =>{
   
    return (
      <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
        
      <stack.Screen name='FeedBackScreen' component={Feedback} />
      
    </stack.Navigator>
    )
  }
  
  export default FeedbackStack