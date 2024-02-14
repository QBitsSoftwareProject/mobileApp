import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather  from 'react-native-vector-icons/Feather';
import filter  from 'lodash.filter'

const API_ENDPOINT = 'https://randomuser.me/api/?results=30';

const SearchBar = ({data}) => {
    // const [isLoading, setIsLoading] = useState(false);
    const [searchData, setSearchData] = useState([]);
    // const [error, setError] = useState(null);
    // const [fullData, setFullData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetchData(API_ENDPOINT);
    // }, []);

    // const fetchData = async(url) => {
    //     try{
    //         const response = await fetch(url);
    //         const json = await  response.json();
    //         setSearchData(json.results);

    //         // console.log(json.results);

    //         setFullData(json.results);
    //         setIsLoading(false);
        
    //     }catch(error) {

    //         setError(error);
    //         console.log(error)
    //     }
    // };
    
    const handleSearch = (query) => {
        setSearchQuery(query);
        // const formattedQuery = query.toLowerCase();
        const filteredData = filter(data, (item) => {
            return  item.title.toLowerCase().includes(query.toLowerCase());
        });
        setSearchData(filteredData)
    };

    // const contains = ({title}, query) => {
      
    // }

    // if (error) {
    //     return (
    //       <View>
    //         <Text>Error in fetching data.. Please check your internet connection!</Text>
    //       </View>  
    //     )
    // };

    
    return (
    <View style={{margin:25}}>
        
        <View style={styles.containerBox}>

            <View style={{flex:8}}>
                <TextInput style={styles.input} 
                placeholder='Search' 
                clearButtonMode='always'
                autoCapitalize='none' 
                autoCorrect={false} 
                value={searchQuery} 
                onChangeText={(text) => handleSearch(text)}/>
            </View>    
            
            <View style={{flex:1, justifyContent:"center"}}>
                <TouchableOpacity  onPress={() => handleSearch(searchQuery)}>
                    <Feather  style={styles.icon} name = 'search' size={20}/>
                </TouchableOpacity>
            </View>

            <FlatList data={docList}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item, index) => index.toString()}
            />

            
        </View>

    </View>
   
    
  )
}

const styles = StyleSheet.create ({
 
    containerBox: {
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'#C0C0C0',
        borderRadius: 40,
        flex:1,
        flexDirection: 'row'
    },
    input: {
        marginLeft:10,
        marginTop: 5,
    },

    icon: {
    borderColor:'#5296C5'
    }
   
})

export default SearchBar