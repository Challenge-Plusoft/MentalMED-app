import { StyleSheet } from 'react-native';

export const styles = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: tema.texto,
      marginBottom: 20,
      textAlign: 'center'
    },
    listContainer: {
      backgroundColor: '#d9d9d9',
      padding: 10,
      borderRadius: 10,
      width: '90%',
      alignItems: 'center'
    },
    listItem: {
      backgroundColor: '#FFF',
      padding: 10,
      paddingHorizontal: 50,
      marginVertical: 5,
      borderRadius: 5,
    },
    listItemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 10,
      color: '#000',
    },
  });
};
