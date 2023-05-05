import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { TemaContext } from '../../contexts/TemaContext';

export default function Footer({ firstIcon, secondIcon, thirdIcon, firstName, secondName, thirdName, navigateToFirst, navigateToSecond, navigateToThird }) {
  const { temaEscolhido } = useContext(TemaContext);
  const style = styles(temaEscolhido);

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.iconContainer} onPress={navigateToFirst}>
        <Ionicons name={firstIcon} size={40} color={style.iconColor.color} />
        <Text style={style.text}>{firstName}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.iconContainer} onPress={navigateToSecond}>
        <Ionicons name={secondIcon} size={40} color={style.iconColor.color} />
        <Text style={style.text}>{secondName}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.iconContainer} onPress={navigateToThird}>
        <Ionicons name={thirdIcon} size={40} color={style.iconColor.color} />
        <Text style={style.text}>{thirdName}</Text>
      </TouchableOpacity>
    </View>
  );
};
