import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Footer({ firstIconName, secondIconName, thirdIconName }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={firstIconName} size={32} color="black" />
        <Text style={styles.text}>{firstIconName}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name={secondIconName} size={32} color="black" />
        <Text style={styles.text}>{secondIconName}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name={thirdIconName} size={32} color="black" />
        <Text style={styles.text}>{thirdIconName}</Text>
      </View>
    </View>

  );
};