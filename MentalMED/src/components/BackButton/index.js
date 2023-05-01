import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function BackButton({ onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={styles.container}
   >
      <View style={{ padding: 10 }}>
        <Ionicons 
         name="arrow-back" 
         size={32} 
         color="black" 
         />
      </View>
    </TouchableOpacity>
  );
};
