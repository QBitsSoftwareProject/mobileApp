import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import styles from "../videoStyle";

// components
import VideoItem from "../VideoItem/VideoItem";

import HeaderSub from "../../../../components/HeaderSub/HeaderSub";
import { useRoute } from "@react-navigation/native";
import { getFilteredVideos } from "../../../../services/educationalServices/educationalServices";

const FilteredVideoContent = () => {
    const route = useRoute();
    const { category } = route.params; // Retrieve the passed category name

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await getFilteredVideos(category);
                setVideos(response.data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[{ key: "unique-key" }]}
                    renderItem={() => (
                        <View>
                            <HeaderSub back={"AllVideoScreen"} headLine={category + " Videos"} />
                            <View style={[styles.VideoList, { paddingHorizontal: 25, marginTop: -10, marginBottom: 50 }]}>
                                <FlatList
                                    data={videos}
                                    renderItem={({ item }) => <VideoItem item={item} />}
                                    keyExtractor={(item) => item._id.toString()} // Ensure each item has a unique key
                                />
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default FilteredVideoContent;
