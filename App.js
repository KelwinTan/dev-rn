import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import uuidv4, { uuid } from 'uuidv4';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
});

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Test'},
    {id: uuid(), text: 'Milk2'}

  ]);
  return (
    <View style={styles.container}>
      <Header />
      {/* <Text>Test</Text> */}
    </View>

  )
}



export default App;