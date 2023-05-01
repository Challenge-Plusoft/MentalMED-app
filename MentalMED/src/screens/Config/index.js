import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import styles from './styles';
import { TemaContext } from '../../contexts/TemaContext';

export default function Config({ navigation }) {
  const { tema, setTemaAtual } = useContext(TemaContext);

   const handleSetTemaAtual = (novoTema) => {
    setTemaAtual(novoTema);
    setTimeout(() => {
      navigation.goBack();
    }, 500);
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPress={() => navigation.goBack()} style={styles.backButton} />
      <Text style={styles.title}>Tema</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetTemaAtual('claro')}
        >
          <Text style={styles.buttonText}>Claro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetTemaAtual('escuro')}
        >
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
