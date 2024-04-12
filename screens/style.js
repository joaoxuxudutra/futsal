import { StyleSheet } from "react-native";

export default styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#C24541',

    },

    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 70,
        padding: 20
    },

    botao: {
        color: "white",
        borderRadius: 80,
        padding: 20,
        backgroundColor: '#000'
    },

    button: {

    },

    imagem:{
        width:'130%',
        height:'120%',
        paddingHorizontal: 11
      },

      texto:{
        color:'black',
        textAlign:'center',
        color:'fff',
        fontWeight:'bold',
        fontSize: 20,
        textAlign:'center',
        padding: '12'
      },

      imagemSobre: {
        width:'70%',
        height:'50%',
        borderRadius: 60,
        
      },

      title: {
        textTransform:"uppercase",
        fontWeight: "bold",
        padding: 20,
        fontSize: 20
      },

      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
        backgroundColor: '#C24541'
      },
})