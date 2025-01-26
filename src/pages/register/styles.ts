import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#ccc',
      marginTop: 80
    
    },
    title: {
      fontSize: 22,
      fontWeight:'bold',
      marginBottom: 20
    },
    input: {
      borderWidth: 1,
      borderColor:'darkgray',
      borderRadius: 40,
      padding: 10,
      marginBottom: 15
    },
    previewImage: {
      width:'100%',
      height: 200,
      marginBottom: 15,
      borderRadius: 8
    },
    boxButton:{
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

