import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Image,
} from "react-native";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import PostCard from "../../components/CFCard/PostCard";
import CommentCard from "../../components/CFCard/CommentCard";
import { useNavigation } from "@react-navigation/native";
import HomePage from "../CommunityHomePage/HomePage";

const post = {
  id: 1,
  image: require("../../assets/images/PostCardImages/boydp.jpg"),
  title: "Chethiya Bandara",
  sub: "public  10 min ago",
  description:
    "“You don't have to see the whole staircase, just take the first step.” – Martin Luther King.",
  Postimage: require("../../assets/images/PostCardImages/fooddish.jpg"),
};

const commentsList = [
  {
    id: 1,
    image: require("../../assets/images/PostCardImages/manprofile.jpg"),
    sub: "Ohhh,,,,:A luminous dream where urban shadows tell a story of nocturnal splendo",
  },
  {
    id: 2,
    image: require("../../assets/images/PostCardImages/girldp.jpg"),
    sub: "Night's embrace transforms the city into a sparkling jewel, captivating and full of allure",
  },

  {
    id: 3,
    image: require("../../assets/images/PostCardImages/boydp2.jpg"),
    sub: "A city of dreams comes alive at night,adorned with a breathtaking display of lights.",
  },
];

const PostContent = (props) => {
  const screenHeight = Dimensions.get("window").height - 275;

  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("");
  };
  return (
    <View>
      <View style={style.contains}>
        <HeaderSub headLine={"Post Content"} subHeadLine={""} back={HomePage} />
      </View>

      <View style={{ height: screenHeight, paddingHorizontal: 25 }}>
        <ScrollView ScrollView style={{ height: "100%", marginBottom: 25 }}>
          <View>
            <PostCard
              key={post.id}
              image={post.image}
              title={post.title}
              sub={post.sub}
              description={post.description}
              Postimage={post.Postimage}
            />
          </View>

          <View style={style.content1}>
            <Text>All Comments</Text>
            <Image
              source={require("../../assets/images/PostCardImages/droparrow.png")}
              style={style.droparrow}
            />
          </View>

          <View>
            {commentsList.map((item) => (
              <View key={item.id}>
                <CommentCard image={item.image} sub={item.sub} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content1: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginBottom: 15,
  },
});

export default PostContent;
