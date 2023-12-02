import {StyleSheet} from 'react-native';
import Constants from "expo-constants";
export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      // flexDirection: 'row',
    //   alignItems: '',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    subitem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    //   alignItems: '',
      // padding: 16,
      // borderBottomWidth: 1,
      // borderBottomColor: '#ddd',
    },
    deschotel: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ddd',
      },
    imagem: {
      width: 350,
      height:300,
      marginRight: 10,
      borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
    },
    imagemMiniatura: {
      width: 110,
      height:110,
      marginRight: 3,
      alignItems: 'center',

       borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
    }, 
    imagemCapa: {
        width: '100%',
        height:300,
        marginRight: 10,
        borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
        alignItems: 'center',
      },
    h1: {
        marginTop: 8,
        fontSize: 30,
        textAlign:"center",
      },
    h2: {
        // marginTop: 2,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:"left",
      },
    h3: {
        // marginTop: 8,
        fontSize: 16,
        textAlign:"left",
      },
      h3a: {
        // marginTop: 8,
        fontSize: 16,
        textAlign:"right",
      },
      h4: {
        // marginTop: 8,
        fontSize:13,
        textAlign:"right",
      },
    dValor: {
        // marginTop: 8,
        fontSize: 30,
        textAlign:"right",
        fontWeight: 'bold',

      },
      dValorDetails: {
        // marginTop: 8,
        fontSize: 30,
        textAlign:"left",
        fontWeight: 'bold',

      },
      
      separator: {
        height: 1,
        backgroundColor: 'gray', // Cor da linha separadora
        marginVertical: 8, // Espaço vertical entre a linha e as imagens
      },
      productContainerDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // Adicione uma linha separadora entre os produtos
        paddingVertical: 8,
      },
      columnDetail: {
        width: '48%', // Defina a largura desejada para as colunas
      },
      button: {
        backgroundColor: '#6495ed',
        padding: 10,
        borderRadius: 5,
        borderRadius: 10, // Bordas mais arredondadas
        marginBottom: 6, // Espaço entre os botões
      },
      buttonReservar: {
        backgroundColor: '#8fbc8f',
        padding: 10,
        borderRadius: 5,
        borderRadius: 10, // Bordas mais arredondadas
        marginBottom: 6, // Espaço entre os botões
      },
      
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:"center",
      },

      image: {
        width: 100,
        height: 100,
        margin: 5,
      },
      closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
      },
      closeButtonText: {
        color: 'black',
        fontWeight: 'bold',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
      },
      modalImage: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
      },
      modalCloseButton: {
        position: 'absolute',
        top: 20,
        right: 20,
      },
      modalCloseText: {
        color: 'white',
        fontSize: 18,
      },
      imageGalleryContainer: {
        alignItems: 'center', // Isso centraliza horizontalmente
      },
  });