// import React, { createContext, useContext, useState } from 'react';
// import { Appearance } from 'react-native';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const systemPref = Appearance.getColorScheme();
//   const [isDark, setIsDark] = useState(systemPref === 'dark');

//   const toggleTheme = () => setIsDark(prev => !prev);

//   const theme = {
//     isDark,
//     toggleTheme,
//     colors: {
//       background: isDark ? '#121212' : '#cde3dc',
//       text: isDark ? '#eee' : '#222',
//       card: isDark ? '#1f1f1f' : '#e7f4ec',
//       border: isDark ? '#333' : '#ccc'
//     }
//   };

//   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
// };

// export const useTheme = () => useContext(ThemeContext);
