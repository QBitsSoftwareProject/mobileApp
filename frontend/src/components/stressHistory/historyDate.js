import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axiosInstance from "../../api/axios";

const HistoryDate = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userid = "214224J";

    const fetchHistoryData = async () => {
      try {
        const response = await axiosInstance.get(`/mark/get-mark-by-id/${userid}`);
        const filteredData = response.data.filter(item => item.userid === userid);
        setUserData(filteredData);
        // Do something with the response data if needed
      } catch (error) {
        // Handle any errors that occurred during the axios request
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData(); // Call the fetchHistoryData function

  }, []); // The empty dependency array ensures that useEffect runs only once

  return (
    <View>
      {/* Your JSX to render the component */}
      <HeaderSub title="History" />

      {/* Example rendering of the fetched data */}
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.date}</Text>
            {/* Add other properties you want to display */}
          </View>
        )}
      />
    </View>
  );
};

export default HistoryDate;
