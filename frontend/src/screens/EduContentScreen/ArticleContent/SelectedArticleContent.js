import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    Image,
    ScrollView,
} from "react-native";
import styles from "./SelectedArticleContentStyles.js";

// navigation
import { useNavigation, useRoute } from "@react-navigation/native";

const SelectedArticleContent = () => {
    const route = useRoute();
    const articleResource = route.params.article;

    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.navigate("ArticleScreen");
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={[styles.contains]}>
                        <ImageBackground
                            source={require("../../../assets/images/blueSqures.png")}
                            style={styles.backImg}
                        >
                            <TouchableOpacity style={styles.backBtn} onPress={handleBackPress}>
                                <Image source={require("../../../assets/images/BackWhite.png")} />
                            </TouchableOpacity>
                            <Text style={{ color: "white", fontSize: 25, marginTop: 10 }}>
                                {articleResource.title}
                            </Text>
                            <Text style={{ color: "white", fontSize: 18, marginTop: 15, textAlign: "left" }}>
                                {articleResource.author}
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={[styles.articleSection, { marginBottom: 100, marginTop: 40, paddingHorizontal: 20 }]}>
                        {articleResource.paragraphs.map((paragraph, index) => (
                            <View key={index} style={{ marginBottom: 15 }}>
                                {paragraph.image && (
                                    <View>
                                        <Image
                                            source={{ uri: paragraph.image.url }}
                                            style={{ width: "100%", height: 200, borderRadius: 7, marginBottom: 10 }}
                                        />
                                        <Text style={{ fontSize: 16, textAlign: "center", paddingVertical: 10, fontWeight: "700" }}>{paragraph.image.about}</Text>
                                    </View>
                                )}
                                <View >
                                    <Text style={{ fontSize: 16 }}>{paragraph.paragraph}</Text>
                                </View>
                            </View>
                        ))}
                        <Text style={{ textAlign: "center", fontSize: 13,marginTop:12 }}>*********END OF ARTICLE*********</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SelectedArticleContent;
