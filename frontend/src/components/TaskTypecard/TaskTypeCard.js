import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const TaskTypeCard = (props) => {
  const navigation = useNavigation();

  const handlePress = () => {};

  return (
    <View style={styles.cardBox}>
      <View style={styles.imgFrame}>
        <Image source={props.icon} style={styles.cardImg} />
      </View>

      <View style={{ flex: 1, flexDirection: "column", gap: 7 }}>
        <View style={styles.textSection}>
          <Text style={styles.headText}>{props.headText}</Text>
          <Text style={styles.subText}>{props.subText}</Text>
        </View>

        <View style={styles.bottomSection}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.completnessText}>{props.taskType}</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.takeBtn,
              {
                borderColor: "rgba(151,157,172,0.5)",
              },
            ]}
            onPress={() => handlePress(props.taskId, props.completeness)}
          >
            <Text style={styles.btnText}>go for It</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskTypeCard;
