import { StyleSheet } from 'react-native';

export const styles = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: tema.fundo,
      height: 130,
      paddingHorizontal: 20,
    },
    left: {
      flex: 1,
      alignItems: 'flex-start',
    },
    logo: {
      width: 50,
      height: 50,
    },
    middle: {
      flex: 2,
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      color: tema.texto
    },
    right: {
      flex: 1,
      alignItems: 'flex-end',
    },
    iconColor: {
      color: tema.texto,
    },
  });
};
