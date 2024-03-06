import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

export function Header() {
  return (
    <>
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Tu as probablement des trucs à faire</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '10%'
  },
  logo: {
    width: 150,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: "#686666",
    textAlign: 'center'
  },
});
