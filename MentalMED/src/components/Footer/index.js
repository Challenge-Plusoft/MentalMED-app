import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { TemaContext } from '../../contexts/TemaContext';

export default function Footer({ firstIcon, secondIcon, thirdIcon, firstName, secondName, thirdName }) {

  const { temaEscolhido } = useContext(TemaContext);
  const style = styles(temaEscolhido);
  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <Ionicons
          name={firstIcon}
          size={32}
          color={style.iconColor.color}
        />
        <Text style={style.text}>{firstName}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name={secondIcon} 
          size={32} 
          color={style.iconColor.color} 
        />
        <Text style={style.text}>{secondName}</Text>
      </View>
      <View style={style.iconContainer}>
        <Ionicons
          name={thirdIcon} 
          size={32} 
          color={style.iconColor.color} 
        />
        <Text style={style.text}>{thirdName}</Text>
      </View>
    </View>

  );
};