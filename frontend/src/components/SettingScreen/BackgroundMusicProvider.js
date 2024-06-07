// BackgroundMusicProvider.js
import React, { createContext, useState } from 'react';

export const BackgroundMusicContext = createContext();

// BackgroundMusicProvider.js
export const BackgroundMusicProvider = ({ children }) => {
    const [backgroundMusicValid, setBackgroundMusicValid] = useState(true);
    const [backgroundMusic, setBackgroundMusic] = useState(true);
  
    
  
    return (
      <BackgroundMusicContext.Provider
        value={{
          backgroundMusicValid,
          setBackgroundMusicValid,
          backgroundMusic,
          setBackgroundMusic

        }}
      >
        {children}
      </BackgroundMusicContext.Provider>
    );
  };
  