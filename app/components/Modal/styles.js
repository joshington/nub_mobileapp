import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      marginBottom:13,
    },
    modalView: {
      margin: 20,
      backgroundColor: "#001665",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.30,
      shadowRadius: 3.84,
      elevation: 7
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 12,
      elevation: 3,
      paddingHorizontal:70,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  
  export default styles;
  