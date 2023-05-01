import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import styles from './styles';

export default function Config({ navigation }) {
   return (
      <View style={styles.container}>
         <BackButton onPress={() => navigation.goBack()}  />
         <Text style={styles.title}>Tema</Text>
         <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>Claro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>Escuro</Text>
            </TouchableOpacity>
         </View>
         <Text style={styles.title}>Senha</Text>
         <TouchableOpacity style={styles.passwordButton}>
            <Text style={styles.passwordButtonText}>Mudar Senha</Text>
         </TouchableOpacity>

      </View>
   );
};
