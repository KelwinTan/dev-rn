import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuidv4, { uuid } from 'uuidv4';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
});

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Test' },
    { id: uuid(), text: 'Milk2' }
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>

  )
}



export default App;