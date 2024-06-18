import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { getSearchProfile } from "../../services/postServices/postServices";

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
    userName: "pahan",
  },
  {
    _id: 6,
    userName: "dilaa",
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
    <View style={{ backgroundColor: "red", flex: 1 }}>
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
          style={{
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: 5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Image
            source={require("../../assets/images/SearchBarIcons/search.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
      {textInputValue !== "" && (
        <View
          style={{
            flex: 1,
            height: 200,
            width: "100%",
            backgroundColor: "white",
            position: "absolute",
            top: 60,
          }}
        >
          <FlatList
            data={DummyList}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  handleNavigateToProfile(item._id);
                }}
                style={{
                  flexDirection: "row",
                  height: 40,
                  width: "100%",
                  borderWidth: 1,
                  padding: 10,
                  marginVertical: 5,
                }}
              >
                <Image style={styles.image} source={item.proPic} />
                <Text style={styles.userName}>{item.userName}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBarComponent;
