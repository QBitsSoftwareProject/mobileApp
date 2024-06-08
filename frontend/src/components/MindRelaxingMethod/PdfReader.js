// PdfReader.js
import React, { useState, useEffect ,useContext} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { BackgroundMusicContext } from '../SettingScreen/BackgroundMusicProvider';
import { useFocusEffect } from '@react-navigation/native';

const PdfReader = ({ pdfSource }) => {


  const { setBackgroundMusicValid } = useContext(BackgroundMusicContext);

  useFocusEffect(
    React.useCallback(() => {
      setBackgroundMusicValid(false);
      

      return () => {
        setBackgroundMusicValid(true);
        
      };
    }, [setBackgroundMusicValid])
  );



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
