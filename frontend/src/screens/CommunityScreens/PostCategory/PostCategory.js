import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import HeaderSub from "../../../components/HeaderSub/HeaderSub";
import { useNavigation } from "@react-navigation/native";
import RegularCard from "../../../components/CFCard/RegularCard";
import HomePage from "../CommunityHomePage/HomePage";

const postCategoryList = [
  {
    id: 1,
    image: require("../../../assets/images/PostCategoryImage/Feedback.png"),
    title: "Stories",
    sub: "Share your journey and experiences, your story matters.",
    arrow: require("../../../assets/images/PostCategoryImage/ForwordArrow.png"),
  },
  {
    id: 2,
    image: require("../../../assets/images/PostCategoryImage/Selflove.png"),
    title: "Self Care",
    sub: "Tips, tricks, and moments that help you prioritize self-love and care.",
    arrow: require("../../../assets/images/PostCategoryImage/ForwordArrow.png"),
  },
  {
    id: 3,
    image: require("../../../assets/images/PostCategoryImage/Yoga.png"),
    title: "Mindfulness",
    sub: "Moments of peace and reflections to nourish your soul and mind.",
    arrow: require("../../../assets/images/PostCategoryImage/ForwordArrow.png"),
  },
  {
    id: 4,
    image: require("../../../assets/images/PostCategoryImage/Creativebrain.png"),
    title: "Creative",
    sub: "Express yourself creatively—art, poetry, or any creative outlet.",
    arrow: require("../../../assets/images/PostCategoryImage/ForwordArrow.png"),
  },
  {
    id: 5,
    image: require("../../../assets/images/PostCategoryImage/Target.png"),
    title: "Supportive",
    sub: "Offer support, encouragement, and empathy to our community members.",
    arrow: require("../../../assets/images/PostCategoryImage/ForwordArrow.png"),
  },
  {
    id: 6,
    image: require("../../../assets/images/PostCategoryImage/Stressed.png"),
    title: "Stress",
    sub: "Insights, strategies, and discussions to manage and overcome stress.",
    arrow: require("../../../assets/images/PostCategoryImage/ForwordArrow.png"),
  },
];

const PostCategory = () => {
  const screenHeight = Dimensions.get("window").height - 275;
  const navigation = useNavigation();

  return (
    <View>
      <HeaderSub
        headLine={"Add your post"}
        subHeadLine={"Select post category."}
        back={HomePage}
      />

      <View
        style={{
          height: screenHeight,
          paddingHorizontal: 25,
        }}
      >
        <ScrollView ScrollView style={{ height: "100%", paddingTop: 15 }}>
          <View style={{ marginBottom: 25 }}>
            {postCategoryList.map((item) => (
              <RegularCard
                key={item.id}
                image={item.image}
                title={item.title}
                sub={item.sub}
                arrow={item.arrow}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PostCategory;

{
  /* <ScrollView ScrollView style={{ height: "100%", paddingTop: 15, marginBottom: 25 }}>
    <View>  */
}
