import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getSearchProfile } from "../../services/postServices/postServices";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const SearchBar = ({ schema }) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [userList, setUserList] = useState([]);

  const navigation = useNavigation();
  // Function to fetch search results
  const fetchSearchResult = async () => {
    try {
      const res = await getSearchProfile(textInputValue, schema);
      setUserList(res);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };
  // Effect to fetch search results when text input value changes
  useEffect(() => {
    if (textInputValue !== "") {
      fetchSearchResult();
    }
  }, [textInputValue]);

  // Reset text input and search results when navigating away from SearchBar
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setTextInputValue(""); // Clear text input value
        setUserList([]); // Reset userList when navigating away from SearchBar
      };
    }, [])
  );

  // Function to handle navigation to profile screen
  const handleNavigateToProfile = (userId) => {
    navigation.navigate("ProfileScreen", { userId: userId });
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={styles.imageframe}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.userProPic }}
                    />
                  </View>

                  <Text style={styles.userName}>{item.userName}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 15,
  },
  textinput: {
    height: 45,
    fontSize: 16,
    borderColor: "#E7E7E7",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 15,
  },

  searchBtn: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  searchIcon: {
    width: 35,
    height: 35,
    opacity: 0.8,
  },

  resultContainer: {
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 15,
    top: 60,
    marginBottom: 20,
    maxHeight: 230,
    elevation: 1,
  },
  resultItem: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    padding: 10,
    marginVertical: 7.5,
  },
  imageframe: {
    height: 35,
    width: 35,

    borderRadius: 50,
    marginRight: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default SearchBar;
