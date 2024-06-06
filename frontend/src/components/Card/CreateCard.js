import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";

const CreateCard = (props) => {
  const currentDate = new Date(props.date);

  return (
    <TouchableOpacity style={styles.cardBox} onPress={props.onPress}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageframe}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Dr. {props.title}</Text>

            {props.cardName == "AvailableDoc" && (
              <View>
                <Text style={styles.description}>{props.university}</Text>
                <Text style={styles.description}>REG NO-{props.regno}</Text>
                <Text style={styles.description}>{props.hospital}</Text>
              </View>
            )}
            {props.cardName == "AvailableDoc" && (
              <View>
                <Text style={styles.description}>{props.university}</Text>
                <Text style={styles.description}>REG NO-{props.regno}</Text>
                <Text style={styles.description}>{props.hospital}</Text>
              </View>
            )}

            {props.cardName === "AppointmentStatus" && (
              <View>
                <Text style={styles.description}>
                  Time:{props.time.from}-{props.time.to}
                </Text>
                <Text style={styles.description}>
                  Date:{currentDate.getUTCFullYear()}-
                  {currentDate.getUTCMonth()}-{currentDate.getUTCDate()}
                </Text>
                <Text
                  style={[
                    styles.description,
                    {
                      color:
                        props.status === "Accepted."
                          ? "#0AC112"
                          : props.status === "Rejected."
                          ? "#E82519"
                          : "#5C677D",
                    },
                  ]}
                >
                  Status: {props.status}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardBox: {
    height: 112,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    color: "#40495B",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
    marginBottom: 7,
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },
  imageframe: {
    height: 70,
    width: 70,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    marginRight: 20,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default CreateCard;
