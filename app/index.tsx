import { Button, ScrollView, StyleSheet, Text, Alert, View, TouchableOpacity, TextInput, Modal} from "react-native";
import React, { useState } from "react";
import CarRepository, { Car } from "../database/CarRepository";

import {Link} from "expo-router";
import "../global.css";

const repository = new CarRepository();

export default function App() {

  return (
    
    <View style={styles.container}>
    
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <Text style={styles.h1}>
          EncontreHotel.com
        </Text>
      </View>
        <View>
            <Link href="/carros">Ir para carros</Link>
            <Link href="/login">Ir para login</Link>
            <Link href="/teste">Ir para teste</Link>

        </View>

      </View>

  );
}


const styles = StyleSheet.create({
  rodape:{
    backgroundColor:"#e0ae67",
    position: "absolute",
    height: 30,
    left: 0,
    right: 0,
    textAlignVertical:"top",
    textAlign:"center",
    bottom: 0,
  },
  cabecalho:{
    backgroundColor:"#e0ae67",
    position: "absolute",
    height: 20,
    left: 0,
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerMap: {
    padding: 24,
    margin: 24,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderStyle:"solid",
  },
  headerContainer: {
    backgroundColor: "#e0ae67",
    padding: 24,
  },
  headerSubContainer: {
    backgroundColor: "#81656c",
    padding: 15,
  },
  headerSubContainerRow: {
    backgroundColor: "#81656c",
    padding: 15,
    flexDirection: "row",
    marginTop: 1,
    justifyContent:"center",
  },
  headerSubContainerRowModal: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent:"space-around",
  },
  headerSearch: {
    backgroundColor: "white",
    paddingLeft: 8,
    height: 48,
    borderRadius: 24,
    flexGrow: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  h1: {
    marginTop: 8,
    fontSize: 30,
    textAlign:"center",
  },
  h2: {
    marginTop: 8,
    fontSize: 16,
    textAlign:"center",
  },
  headerIcon: {
    width: 48,
    height: 48,
    backgroundColor: "lightgrey",
    borderRadius: 24,
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: "row",
    marginTop: 1,
    justifyContent:"center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    height: 100,
    backgroundColor: "#ADD8E6",
  },
  desc: {
    fontSize: 14,
    marginTop: 1,
    marginBottom:1,
  },
  input: {
    borderWidth: 1, // Largura da borda
    borderColor: '#ccc', // Cor da borda
    borderRadius: 5, // Raio de borda para arredondar
    paddingHorizontal: 10, // Espaçamento interno para texto
    width: 50, // Largura do TextInput
    backgroundColor: 'white', // Fundo branco
    marginEnd: 20, // Margem depois
  },
  inputTexto: {
    borderWidth: 1, // Largura da borda
    borderColor: '#ccc', // Cor da borda
    borderRadius: 5, // Raio de borda para arredondar
    paddingHorizontal: 10, // Espaçamento interno para texto
    width: 200, // Largura do TextInput
    backgroundColor: 'white', // Fundo branco
    marginEnd: 20, // Margem depois
  },
  inputTextoModal: {
    borderWidth: 1, // Largura da borda
    borderColor: '#ccc', // Cor da borda
    borderRadius: 5, // Raio de borda para arredondar
    paddingHorizontal: 10, // Espaçamento interno para texto
    width: 150, // Largura do TextInput
    backgroundColor: 'white', // Fundo branco
    marginEnd: 20, // Margem depois
  },
  botao: {
    backgroundColor: 'blue', // Cor de fundo do botão
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho do texto do botão
    padding: 10, // Espaçamento interno do botão
    borderRadius: 5, // Raio de borda para arredondar o botão
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
});


