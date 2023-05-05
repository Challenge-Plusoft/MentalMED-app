import { StyleSheet } from 'react-native';

export const styles = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: tema.fundo,
      height: 60,
      paddingHorizontal: 10,
    },
    iconContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginHorizontal: 10, // adicionado margens laterais para ajustar a posição do texto
    },
    iconColor: {
      color: tema.texto
    },
    text: {
      textAlign: 'center',
      color: tema.texto
    },
  });
};
