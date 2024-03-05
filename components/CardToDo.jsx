import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const CardToDo = ({ toDo, onPress, onLongPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(toDo)} onLongPress={() => onLongPress(toDo)}>
      <Text style={[styles.text, toDo.isCompleted && { textDecorationLine: "line-through" }]}>{toDo.title}</Text>
      {toDo.isCompleted && <Image source={require('../assets/check.png')} style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CardToDo;
