import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Footer({ firstIconName, secondIconName, thirdIconName }) {
  return (
    <View style={styles.container}>
      <Ionicons name={firstIconName} size={32} color="black" />
      <Ionicons name={secondIconName} size={32} color="black" />
      <Ionicons name={thirdIconName} size={32} color="black" />
    </View>
  );
};