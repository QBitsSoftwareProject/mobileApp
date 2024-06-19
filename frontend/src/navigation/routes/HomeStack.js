import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CommunityHomeStack from "./CommunityHomeStack";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}

      <stack.Screen name="CommunityStack" component={CommunityHomeStack} />
    </stack.Navigator>
  );
};

export default HomeStack;
