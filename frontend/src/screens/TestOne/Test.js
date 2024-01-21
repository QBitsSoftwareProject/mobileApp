import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PopupMessage from '../../components/Pop-up/Pop-upScreen'


const App = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleConfirm = () => {
    // Handle confirmation logic
    setPopupVisible(false);
  };

  const handleCancel = () => {
    // Handle cancelation logic
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Your main content goes here */}

      {/* Trigger the pop-up */}
      <TouchableOpacity onPress={() => setPopupVisible(true)}>
        <Text>Make an Appointment</Text>
      </TouchableOpacity>

      {/* Pop-up component */}
      <PopupMessage
        visible={popupVisible}
        message="Do you confirm?"
        imageUrl="../../assets/images/Confirm.png" // Add your image URL here
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default App;