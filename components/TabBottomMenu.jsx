import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../TabBottomMenu.style';

export function TabBottomMenu({ selectedTabName, onPress, allCount, inProgressCount, doneCount }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, selectedTabName === "all" && { backgroundColor: '#2F76E5' }]} onPress={() => onPress("all")}>
        <Text style={[styles.buttonText, selectedTabName === "all" && styles.buttonTextSelected]}>All ({allCount})</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, selectedTabName === "inProgress" && { backgroundColor: '#2F76E5' }]} onPress={() => onPress("inProgress")}>
        <Text style={[styles.buttonText, selectedTabName === "inProgress" && styles.buttonTextSelected]}>In progress ({inProgressCount})</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, selectedTabName === "done" && { backgroundColor: '#2F76E5' }]} onPress={() => onPress("done")}>
        <Text style={[styles.buttonText, selectedTabName === "done" && styles.buttonTextSelected]}>Done ({doneCount})</Text>
      </TouchableOpacity>
    </View>
  );
}
