import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import getSearchProfile from "../../services/postServices/postServices";

//dummyData

const DummyList = [
  {
    _id: 1,
    userName: "piyumi",
  },
  {
    _id: 2,
    userName: "ravindu",
  },
  {
    _id: 3,
    userName: "dinul",
  },
  {
    _id: 4,
    userName: "nipuni",
  },
  {
    _id: 5,
    userName: "pasan",
  },
];

const SearchBarComponent = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [userList, setUserList] = useState([]);

  const fetchSearchResult = async () => {
    try {
      const res = await getSearchProfile(textInputValue);
      setUserList(res);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  useEffect(() => {
    if (textInputValue !== "") {
      fetchSearchResult();
    }
  }, [textInputValue]);

  const handleNavigateToProfile = (x) => {
    console.log(x);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.content1}>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.textinput}
            placeholder="Search here...."
            value={textInputValue}
            onChangeText={(text) => {
              setTextInputValue(text);
            }}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={require("../../assets/images/SearchBarIcons/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      {textInputValue !== "" && (
        <View style={styles.resultContainer}>
          <ScrollView>
            {DummyList.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  handleNavigateToProfile(item._id);
                }}
                style={styles.resultItem}
              >
                <Image style={styles.image} source={item.proPic} />
                <Text style={styles.userName}>{item.userName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchBarComponent;
