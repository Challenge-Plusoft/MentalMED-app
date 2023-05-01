import { StyleSheet } from 'react-native';

export const styles = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
    },
    texto: {
      backgroundColor: tema.fundo,
      color: tema.texto,
      padding: 10,
      marginBottom: 20,
    },
    especialista: {
      backgroundColor: tema.fundo,
      paddingVertical: 20,
    },
    especialistaTitulo: {
      color: tema.texto,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    doctorContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    doctor: {
      alignItems: 'center',
    },
    doctorImg: {
      width: 90,
      height: 90,
      borderRadius: 50,
      marginBottom: 5,
    },
    doctorNome: {
      fontWeight: 'bold',
      color: tema.texto
    },
  });
};
