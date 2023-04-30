import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Footer({ firstIcon, secondIcon, thirdIcon, firstName, secondName, thirdName }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons 
          name={firstIcon} 
          size={32} 
          color="black" 
        />
        <Text style={styles.text}>{firstName}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons 
          name={secondIcon} 
          size={32} 
          color="black" 
        />
        <Text style={styles.text}>{secondName}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons 
          name={thirdIcon} 
          size={32} 
          color="black" 
        />
        <Text style={styles.text}>{thirdName}</Text>
      </View>
    </View>

  );
};