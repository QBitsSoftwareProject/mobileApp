import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import EduContent from "../../screens/EduContentScreen/EduContent";
import VideoStack from "./VideoStack";
import AudioContent from "../../screens/EduContentScreen/AudioContent/AudioContent";
import ArticleStack from "./ArticleStack";

const stack = createNativeStackNavigator();

const EducationalStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="EducationalScreen" component={EduContent} />
      <stack.Screen name="ArticleStack" component={ArticleStack} />
      <stack.Screen name="VideoScreen" component={VideoStack} />
      <stack.Screen name="AudioScreen" component={AudioContent} />
    </stack.Navigator>
  );
};

export default EducationalStack;
