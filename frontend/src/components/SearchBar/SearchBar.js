import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles";
import { getSearchProfile } from "../../services/postServices/postServices";
import debounce from "lodash/debounce";

const SearchBar = () => {
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

  const handleNavigateToProfile = (userId) => {
    console.log(userId);
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

        <TouchableOpacity
          onPress={() => fetchSearchResult(textInputValue)}
          style={styles.searchBtn}
        >
          <Image
            source={require("../../assets/images/SearchBarIcons/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      {textInputValue !== "" && (
        <View style={styles.resultContainer}>
          <ScrollView>
            {userList.map((item) => (
              <TouchableOpacity
                key={item.userId}
                onPress={() => {
                  handleNavigateToProfile(item.userId);
                }}
                style={styles.resultItem}
              >
                <Image
                  style={styles.image}
                  source={{ uri: item.userId.proPic }}
                />
                <Text style={styles.userName}>{item.userId.userName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchBar;
