// toastConfig.js
import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example import for FontAwesome icons

const SuccessToast = ({ text1, text2 }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <BaseToast
      style={{ borderLeftColor: 'green', borderRadius: 15 }}
      contentContainerStyle={{ paddingHorizontal: 15, flexDirection: 'column', alignItems: 'center' }}
      text1={text1}
      text2={text2}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 12,
        color: 'gray'
      }}
    />
  </View>
);

const InstructionToast = ({ text1, text2 }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <BaseToast
      style={{ borderLeftColor: '#87CEEB', borderRadius: 15 }}
      contentContainerStyle={{ paddingHorizontal: 15, flexDirection: 'column', alignItems: 'center' }}
      text1={text1}
      text2={text2}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 12,
        color: 'gray'
      }}
    />
  </View>
);

const toastConfig = {
  success: (internalState) => (
    <SuccessToast
      {...internalState}
      text1={internalState.text1}
      text2={internalState.text2}
    />
  ),
  error: (internalState) => (
    <ErrorToast
      {...internalState}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
      text2Style={{
        fontSize: 13,
        color: 'red'
      }}
    />
  ),
  instruction: (internalState) => (
    <InstructionToast
      {...internalState}
      text1={internalState.text1}
      text2={internalState.text2}
    />
  )
};

export default toastConfig;
