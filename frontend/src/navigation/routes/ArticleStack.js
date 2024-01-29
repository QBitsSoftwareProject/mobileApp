import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthorScreen from "../../screens/EduContentScreen/ArticleContent/AuthorsScreen/AuthorScreen";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="AuthorScreen" component={AuthorScreen} />
    </stack.Navigator>
  );
};

export default HomeStack;
