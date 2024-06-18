import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from "react-native";
import styles from "./articleStyle.js";
import ProfilePic from "../ProfilePic/ProfilePic.js";

// data imports
import Authors from "./Authors.js";
import Article from "./Article.js";
// data imports

import HeaderSub from "../../../components/HeaderSub/HeaderSub.js";

// navigation
import { useRoute } from "@react-navigation/native";
import { getArticles, getCategorizedArticles } from "../../../services/educationalServices/educationalServices.js";
// navigation

const CategorizedArticlesContent = () => {

    const route = useRoute();
    const { category } = route.params;

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const fetchArticles = async () => {
            try {
                let articles;
                articles = (category == "All Articles") ? (await getArticles()) : (await getCategorizedArticles(category));
                setArticles(articles.data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();

    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={[{ key: "unique-key" }]}
                renderItem={() => (
                    <View>
                        <View>
                            <HeaderSub back={"ArticleScreen"} headLine={(category == "All Articles") ? (category) : (category + " articles")} />
                        </View>
                        <View
                            style={[
                                styles.articleSection,
                                { marginBottom: 100, marginTop: 10 },
                            ]}
                        >
                            <FlatList
                                data={articles}
                                renderItem={({ item }) => {
                                    return <Article item={item} />;
                                }}
                            />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default CategorizedArticlesContent;
