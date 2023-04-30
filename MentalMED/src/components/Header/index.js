import React from 'react';
import { View, Text, Image  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Logo from '../../assets/Logo.png'

export default function Header() {
    return(
        <View style={styles.container}>
        <View style={styles.left}>
          <Image 
            source={Logo} 
            style={[styles.logo, { width: 80, height: 80 }]} 
          />
        </View>
        <View style={styles.middle}>
          <Text style={[styles.name, { fontSize: 32 }]}>Vinícius</Text>
        </View>
        <View style={styles.right}>
          <AntDesign 
            name="setting" 
            size={45} 
            color="black" 
          />
        </View>
      </View>
    )
}