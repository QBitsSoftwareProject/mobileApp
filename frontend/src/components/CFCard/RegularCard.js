import { StyleSheet, TouchableOpacity, View, Image, Text} from "react-native";
import React from "react";

const RegularCard = (props) => {

  
  return (
    <TouchableOpacity style={styles.cardBox} >
      
      <View style={styles.content1}>
        
        <View style={styles.imageframe}>
          <Image source={props.image} style={styles.image} />
        </View>

      </View>

      <View style={styles.content2}>
          
          <Text style={styles.title}>{props.title}</Text>

          <View>
            <Text style={styles.sub}>{props.sub}</Text>
          </View>

      </View>

      <View style={styles.content3}>
        <Image source={props.arrow} style={styles.arrow} />
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    display:'flex',
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    width: "100%",
    height:90,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
    marginBottom: 15,
    gap:10
  },
 
  imageframe: {
    height: 60,
    width: 60,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 50,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content2: {
    width: "70%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#40495B",
  },
  sub: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5C677D",
  },
 
  arrow: {
    width: 20,
    height: 20,
  },
 
});

export default RegularCard;
