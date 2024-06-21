import { View, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./audioStyle";

// components
import SearchBarComponent from "../../../components/SearchBar/SearchBar";
import SearchAndCategories from "../../../components/SearchAndCategories/SearchAndCategories";
import AudioCategoryItem from "../AudioContent/AudioCategories/AudioCategoryItem";
import AudioItem from "../../../components/AudioList/AudioItem";
// components

// category data
import { getAudioTags, getAudios, getAudiosBySearch, getAudiosBySearchAndCategory, getFilteredAudios } from "../../../services/educationalServices/educationalServices";
// category data

const AudioContent = () => {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
  const [audioData, setAudioData] = useState([]);
  const [audioCategories, setAudioCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Audios");

  const [keyword, setKeyWord] = useState("");

  const handlePlayPause = (id) => {
    setCurrentlyPlayingId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        // const Audios = await getAudios();
        const tags = await getAudioTags();
        // const filteredAudios = await getFilteredAudios(selectedCategory);
        let response;
        if (keyword != "") {
          setSelectedCategory("All Audios");
          response = await getAudiosBySearch(keyword);
        } else {
          if (selectedCategory === "All Audios") {
            response = await getAudios();
          } else {
            response = await getFilteredAudios(selectedCategory);
          }
        }
        setAudioData((response) ? (response.data) : ([]));
        setAudioCategories(["All Audios", ...tags.data.tags]);
      } catch (error) {
        console.error('Error fetching audio data:', error);
      }
    };
    fetchAudioData();
  }, [selectedCategory, keyword]);



  return (
    <SafeAreaView>
      <View>
        <View style={{ zIndex: 100, marginTop: 40 }}>
          {/* search and categories */}
          <View style={{ paddingHorizontal: 25 }}>
            <SearchBarComponent keyword={setKeyWord} />
          </View>
          <SearchAndCategories currentView={"AudioScreen"} />
          {/* search and categories */}
          {/* audio categories */}
          <View style={styles.AudioCategoryContainer}>
            <FlatList
              data={audioCategories}
              horizontal
              renderItem={({ item }) => {
                return (
                  <>
                    <AudioCategoryItem item={item} selectedTagFunction={setSelectedCategory} selectedTag={selectedCategory} />
                  </>
                );
              }}
            />
          </View>
          {/* audio categories */}
          {/* audio items */}
          <View style={[styles.AudioItemContainer]}>
            <FlatList
              data={audioData}
              key={(index) => index} // Ensure to add a key extractor
              renderItem={({ item }) => {
                return (
                  <AudioItem
                    item={item}
                    category
                    isPlaying={currentlyPlayingId === item.id}
                    onPlayPause={() => handlePlayPause(item.id)}
                  />
                );
              }}
            />
          </View>
          {/* audio items */}
        </View>
      </View>
    </SafeAreaView >
  );
};

export default AudioContent;
