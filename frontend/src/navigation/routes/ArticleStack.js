import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthorScreen from "../../screens/EduContentScreen/ArticleContent/AuthorsScreen/AuthorScreen";
import AllAuthorScreen from "../../screens/EduContentScreen/ArticleContent/AuthorsScreen/AllAuthorScreen";
import ArticleContent from "../../screens/EduContentScreen/ArticleContent/ArticleContent";

const stack = createNativeStackNavigator();

const ArticleStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="ArticleScreen" component={ArticleContent} />
      <stack.Screen name="AllAuthorScreen" component={AllAuthorScreen} />
      <stack.Screen name="AuthorScreen" component={AuthorScreen} />
    </stack.Navigator>
  );
};

export default ArticleStack;
