import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen'

const stack = createNativeStackNavigator();

const HomeStack = ({route}) => {
  const { userName } = route.params;

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='HomeScreen' component={HomeScreen}  initialParams={{ userName: userName }}/>
    
      
    </stack.Navigator>

  )
}

export default HomeStack

