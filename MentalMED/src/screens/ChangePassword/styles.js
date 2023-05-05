import { StyleSheet } from 'react-native';

export const styles = (tema) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: tema.fundo,
        },
        content: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 20,
            color: tema.texto
        },
        input: {
            width: '90%',
            height: 50,
            borderWidth: 2,
            borderColor: tema.texto,
            color: tema.texto,
            borderRadius: 8,
            padding: 10,
            marginBottom: 20,
        },
        button: {
            width: '65%',
            backgroundColor: '#9B51E0',
            borderRadius: 8,
            padding: 10,
        },
        buttonText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#FFF',
            textAlign: 'center'
        },
    });
};
