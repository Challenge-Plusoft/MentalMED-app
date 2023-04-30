import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  texto: {
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 20

  },
  especialista: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
  },
  especialistaTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  doctorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  doctor: {
    alignItems: "center",
  },
  doctorImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  doctorNome: {
    fontWeight: "bold",
  },
});
