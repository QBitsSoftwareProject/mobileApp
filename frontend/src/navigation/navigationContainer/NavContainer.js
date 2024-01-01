import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../route/HomeStack'

const NavContainer = () => {

  return (
    <NavigationContainer>
        <HomeStack/>
    </NavigationContainer>
  )
}

export default NavContainer