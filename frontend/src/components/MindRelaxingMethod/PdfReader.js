// PdfReader.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const PdfReader = ({ pdfSource }) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: pdfSource }}
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        useWebKit={true}
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
  webView: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PdfReader;
