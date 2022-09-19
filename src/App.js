/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type { Node } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import Main from './Main';
 
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
   };
 
   return (
       <SafeAreaView style={backgroundStyle}>
         <StatusBar
           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
           backgroundColor={backgroundStyle.backgroundColor}
         />
         <Main></Main>
       </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
 
 });
 
 export default App;
 