import React from "react";
import { ScrollView, View } from "react-native";
import DropdownCard from "./Card";
import HeaderSubSug from "./HeaderSubSug";

const SuggestioScreen = () => {
  return (
    <View>
      <HeaderSubSug
        headLine="Suggestions"
        subHeadLine="Explore personal recommendations"
      />

      <ScrollView style={{ height: 518 }}>
        <DropdownCard
          image={require("../../../assets/images/Suggestions/sug1.png")}
          title="Do positive activity"
          subTittle="workout"
          dropdown={require("../../../assets/images/Suggestions/dropdown.png")}
          imageContent={require("../../../assets/images/Suggestions/sug11.png")}
          content="Take a movement to acknowledge your feelings of sadness and understand there source. Reflect on recent events or triggers that might have contribute to your mood. "
        />

        <DropdownCard
          image={require("../../../assets/images/Suggestions/sug2.png")}
          title="Do meditate activity"
          subTittle="15 minites"
          dropdown={require("../../../assets/images/Suggestions/dropdown.png")}
          imageContent={require("../../../assets/images/Suggestions/sug22.png")}
          content="In silent meditation, find solace by breathing rhythmically grounding oneself in the present movement, and embracing innertranquility amid life’s chaos.  "
        />

        <DropdownCard
          image={require("../../../assets/images/Suggestions/sug3.png")}
          title="Listen to music"
          subTittle="Felista by yann"
          dropdown={require("../../../assets/images/Suggestions/dropdown.png")}
          imageContent={require("../../../assets/images/Suggestions/sug33.png")}
          content="Music can alleviate stress by triggering relaxation responses and reducing cortisol level. it has power to uplift spirits,elevate mood, and evoke positive emotions  "
        />

        <DropdownCard
          image={require("../../../assets/images/Suggestions/sug4.png")}
          title="Dancing"
          subTittle="20 minites"
          dropdown={require("../../../assets/images/Suggestions/dropdown.png")}
          imageContent={require("../../../assets/images/Suggestions/sug44.png")}
          content="Dancing can release endorphins, boosting moods,  reducing stress, and promoting feelings of happiness and well-being. "
        />

        <DropdownCard
          image={require("../../../assets/images/Suggestions/sug5.png")}
          title="Get a seek support"
          subTittle="30 minites"
          dropdown={require("../../../assets/images/Suggestions/dropdown.png")}
          imageContent={require("../../../assets/images/Suggestions/sug55.png")}
          content="Talk to trusted friend, family member or professional counselor for guidance and support in managing anger. "
        />

        <DropdownCard
          image={require("../../../assets/images/Suggestions/sug6.png")}
          title="Cognitive Restricting"
          subTittle="30 minites"
          dropdown={require("../../../assets/images/Suggestions/dropdown.png")}
          imageContent={require("../../../assets/images/Suggestions/sug66.png")}
          content="Challenge negative thought patterns,that fuel anger. reframe situations to perceive them more positively or realistically "
        />
      </ScrollView>
    </View>
  );
};

export default SuggestioScreen;
