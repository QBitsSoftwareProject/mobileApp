import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const warning = require("../../assets/images/warning.png");
const complete = require("../../assets/images/check.png");
let completenessImage = null;

const TaskCard = (props) => {
  const navigation = useNavigation();

  if (props.completeness) {
    completenessImage = complete;
  } else if (!props.completeness) {
    completenessImage = warning;
  }

  const handlePress = (taskId, completeness) => {
    navigation.navigate("TaskDescriptionScreen", {
      taskId,
      completeness,
      index: props.index,
      type: props.type,
    });
  };

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
            <Text style={styles.completnessText}>Completeness</Text>
            <Image source={completenessImage} />
          </View>

          <TouchableOpacity
            style={[
              styles.takeBtn,
              {
                borderColor: props.completeness
                  ? "rgba(74,191,180,0.5)"
                  : "rgba(151,157,172,0.5)",
              },
            ]}
            onPress={() => handlePress(props.taskId, props.completeness)}
          >
            {!props.completeness && <Text style={styles.btnText}>Take</Text>}

            {props.completeness && <Text style={styles.btnText}>View</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;
