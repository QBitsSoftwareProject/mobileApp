import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';

const DropdownCard = ({ image, title, subTittle, content, imageContent, dropdown }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View  style={[styles.title, isCollapsed ? styles.collapsed : styles.expanded]}>
                <View style={styles.headerContainer}>
                    {/* Column for image */}
                    <View style={styles.imageColumn}>
                        <Image style={styles.image} source={image} />
                    </View>
                    {/* Column for title */}
                    <View style={styles.titleColumn}>
                        <Text style={styles.textTitle}>{title}</Text>
                        <Text style={styles.subTittle}>{subTittle}</Text>
                    </View>
                    {/* Dropdown Image */}
                    <TouchableOpacity onPress={toggleCollapse }  style={styles.dropdown}>
                        <Image source={!isCollapsed ? dropdown : require('../../assets/images/Suggestions/down.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Content */}
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.content}>
                    <Image style={styles.imageContent} source={imageContent} />
                    <Text style={styles.textContent}>{content}</Text>
                </View>
            </Collapsible>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    
        
    },
    title: {
        backgroundColor: 'white',
        width: 343,
        height: 112,
        marginTop:15,
        justifyContent: 'center',
        alignSelf: 'center',
        borderTopRightRadius: 16,
        borderTopLeftRadius:16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius:16,
        elevation: 2,
    },

    expanded:{
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0

    },
    headerContainer: {
        flexDirection: 'row', // Arrange items horizontally
    },
    imageColumn: {
        width: '35%',
    },
    titleColumn: {
        flex: 1,
        width: '60%',
        paddingTop: 15,
    },
    dropdown: {
        width: '15%',
        alignSelf: 'center',
    },
    image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginLeft: 25,
    },
    textTitle: {
        fontSize: 18,
        color: '#101318',
    },
    subTittle: {
        fontSize: 12,
        color: '#5C677D',
        marginTop: 1,
    },
    content: {
        backgroundColor: 'white',
        width: 343,
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius:16,
        elevation: 2,
        paddingTop: 5,
        marginBottom: 15,
    },
    textContent: {
        marginBottom: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 25,
        marginRight: 25,
        fontSize: 12,
        color: '#40495B',
    },
    imageContent: {
        alignSelf: 'center',
        marginBottom: 15,
    },
});

export default DropdownCard;

