
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import styles from "./JornalStyles";

const emojis = ["😊", "😢", "😡", "😍", "😱", "😐", " 😴" ,"🤒"];

const Journal = () => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [feeling, setFeeling] = useState("");
  const [stress, setStress] = useState("");

  const handleCreate = () => {
    //logic for creating a new journal entry here
    alert("Your journal is ready");
  };

  const renderEmoji = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => setFeeling(item)}>
        <Text style={styles.emoji}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderStress = (level, color) => {
    return (
      <TouchableOpacity onPress={() => setStress(level)}>
        <View style={[styles.circle, { backgroundColor: color }]}>
          <Text style={styles.stress}>{level}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Add New Journal</Text>
        <Text style={styles.subtitle}>Welcome to our mindful haven</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button1,{marginRight:0}]}>
          <Text style={styles.buttonText1}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2,{marginLeft:-30}]}>
          <Text style={styles.buttonText2}>View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.feeling}>
        <Text style={styles.label}>Feeling with...</Text>
        <FlatList
          data={emojis}
          renderItem={renderEmoji}
          keyExtractor={(item) => item}
          horizontal={true}
        />
      </View>
      <View style={styles.input}>
        <Text style={[styles.label,{paddingBottom:15}]}>Journal Title</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Feeling Happy today..."
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.input}>
        <Text style={[styles.label,{paddingBottom:15}]}>Write your entry</Text>
        <TextInput
          style={styles.textArea}
          
          placeholder ="I have a happy day today. at school...., "
          multiline={true}
          value={entry}
          onChangeText={setEntry}
        />
      </View>
    
      <TouchableOpacity style={styles.create} onPress={handleCreate}>
        <Text style={styles.createText}>Create Journal</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Journal;