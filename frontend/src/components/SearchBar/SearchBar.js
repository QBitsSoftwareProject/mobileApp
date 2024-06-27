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
// import styles from "./styles";
import { getSearchProfile } from "../../services/postServices/postServices";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [userList, setUserList] = useState([]);

  const navigation = useNavigation();

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
    paddingVertical: 5,
  },
  textinput: {
    height: 45,
    fontSize: 18,
    borderColor: "#E7E7E7",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },

  searchBtn: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
    backgroundColor: "gray",
    opacity: 0.5,
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
