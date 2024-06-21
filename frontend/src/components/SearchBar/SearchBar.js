import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";

const docList = [
  {
    id: 1,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Weerasinghe.",
    university: "MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
  {
    id: 2,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Amarasinghe.",
    university: "MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
  {
    id: 3,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Samarasinghe.",
    university: "MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
  {
    id: 4,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Jayasinghe.",
    university: "MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
  {
    id: 5,
    image: require("../../assets/images/kitharringtonhair.jpg"),
    title: "Dr. B.M. Ranasinghe.",
    university: "MBBS, University of Colombo.",
    regno: "234589.",
    hospital: "Anuradhapura Genaral Hospital.",
  },
];

const SearchBar = (props) => {
  const [newFilteredData, setNewFilteredData] = useState();

  const handleSearch = (text) => {
    const lowerCaseText = text.toLowerCase();
    const filteredData = docList.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseText)
    );
    setNewFilteredData(filteredData);
  };

  return (
    <View style={{ margin: 25 }}>
      <View style={styles.containerBox}>
        <View style={{ flex: 8 }}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              props.press(true);
              props.newData(newFilteredData);
            }}
          >
            <Feather style={styles.icon} name="search" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  containerBox: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 40,
    flex: 1,
    flexDirection: "row",
  },
  input: {
    marginLeft: 10,
    marginTop: 5,
  },

  icon: {
    borderColor: "#5296C5",
  },
});

export default SearchBar;
