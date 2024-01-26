import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import EduContent from '../../screens/EduContentScreen/EduContent';
import EducationalStack from '../../navigation/routes/EducationalStack';
const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} /> */}
      <stack.Screen name='EducationalStack' component={EducationalStack} />
      
    </stack.Navigator>

  )
}

export default HomeStack