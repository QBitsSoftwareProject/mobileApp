import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchFilter = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    if (!data|| !Array.isArray(data)) {
      console.error('Invalid data provided:',data);
      return;
    }

    const filtered =data.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setQuery(text);
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        onChangeText={handleSearch}
        value={query}
        placeholder="Search..."
      />
      <FlatList
        data={docList}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    paddingVertical:50,
    paddingHorizontal:25
  }
})

export default SearchFilter;
