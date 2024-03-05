import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

export function Header() {
  return (
    <>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>trucs à faire</Text>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    color: "#686666"
  },
});
