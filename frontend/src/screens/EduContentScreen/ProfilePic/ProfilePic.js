import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './ProfileStyles'

const ProfilePic = ({item}) => {
  if (!item) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.ProfilePic}>
      <View style={{ alignItems: "center" }}>
        <View>
          <Image source={item.image} />
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            color: "#596C79",
            fontWeight: "1000",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProfilePic;