import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const BoutonAdd = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>+ New todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '13%',
    right: 15,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2F76E5',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BoutonAdd;
