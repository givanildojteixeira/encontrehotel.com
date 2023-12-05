import {StyleSheet} from 'react-native';
import Constants from "expo-constants";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,
      marginTop: Constants.statusBarHeight,
    },
    containerIndex: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    headerContainer: {
      backgroundColor: "#7cfc00",
      padding: 35,
      // borderWidth: 1, // Largura da borda
      borderRadius: 5, // Raio de borda para arredondar
      height:120,
    },
    Container2ColunasJustificadas:{
      flexDirection: 'row', // Para organizar em linha (horizontal)
      justifyContent: 'space-between', // Para distribuir espaço entre as colunas
    },
    colunasDivididas: {
      flex: 1, // Para ocupar a metade do espaço disponível
      // marginLeft: 16, // Adapte conforme necessário
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
  emlinha: {
    flexDirection: 'row',
    alignItems: 'center',
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
    logoGrande: {
      width: 200,
      height:200,
      // marginRight: 10,
      // borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
      alignItems: 'center',
    },   
    LogoPequeno: {
      width: 50,
      height:50,
      // marginRight: 10,
      // borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
      // alignItems: 'center',
    },  
    IconeCabecalho: {
      width: 63,
      height:50,
      // marginRight: 10,
      // borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
      // alignItems: 'center',
    }, 
    imagemCapa: {
        width: '100%',
        height:400,
        marginRight: 10,
        borderRadius: 25, // Para tornar a imagem circular, ajuste conforme necessário
        alignItems: 'center',       // Centraliza horizontalmente
        justifyContent: 'center',   // Centraliza verticalmente
        resizeMode: 'stretch', // ou 'contain' ou 'stretch'
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
    h2a: {
      marginTop: 2,
      fontSize: 16,
      textAlign:"center",
    },
    h2Home:{
      marginTop: 2,
      fontSize: 20,
      textAlign:"center",
      fontWeight: 'bold',

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
      buttonFavoritos: {
        backgroundColor: '#daa520',
        padding: 10,
        // borderRadius: 5,
        borderRadius: 10, // Bordas mais arredondadas
        marginBottom: 6, // Espaço entre os botões
      },
      buttonReservar: {
        backgroundColor: '#8fbc8f',
        padding: 10,
        // borderRadius: 5,
        borderRadius: 10, // Bordas mais arredondadas
        marginBottom: 6, // Espaço entre os botões
      },
      
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:"center",
      },
    
    cInputBox:{
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingHorizontal: 10, 
      flex: 1, 
    },
    cInputBoxSubCab:{
      borderWidth: 1, 
      height: 40, 
      // borderColor: 'gray', 
      padding: 10,

    },
    checkBoxContainer: {
      backgroundColor: 'transparent', // Define o fundo como transparente
      borderWidth: 0, // Remove a borda (opcional)
      marginRight: 0,
      marginBottom: 0,
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
      containerLogin: {
        // flex: 1,
        // paddingHorizontal:20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 26,
      },
      input: {
        //TextInput do Login
        height: 40,
        width: "90%",
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 10,
        fontSize: 18,

      },
      login: {
        //botão de login
        width: "90%",
        paddingHorizontal: 8,
        // borderRadius: 15,
      },

      register: {
        //pedido de login e senha
        color: "blue",
        fontWeight: "600",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,

      },
  });