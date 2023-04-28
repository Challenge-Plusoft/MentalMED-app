import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
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
      alignItems: 'center'
    },
    name: {
        fontSize: 24,
    },
    right: {
      flex: 1,
      alignItems: 'flex-end',
    },
});