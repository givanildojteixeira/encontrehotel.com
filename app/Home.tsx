import React from "react";

import { TouchableOpacity, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import "../global.css";
import Offer from "../components/Offer";
import { offers } from "../mocks/offers";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const handleSearch = (val: string) => {
    console.log("O Valor digitado na busca foi: ", val);
  };
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.h1}>
          Módulo 03
        </Text>
        <Text style={styles.h2}>
          Boas práticas para a criação de componentes reutilizáveis.
        </Text>
      </View>
      <View style={styles.headerSubContainer}>
        <SearchBar onSearch={handleSearch} />
      </View>

      <ScrollView>
        {offers.map((item, index) => (
          <Offer
            key={index}
            veiculo={item.veiculo}
            modelo={item.modelo}
            ano={item.ano}
            chassi={item.chassi}
            preco={item.preco}
          />
        ))}
      </ScrollView>
 
      <TouchableOpacity style={styles.rodape} />

    </View>
  );
}


const styles = StyleSheet.create({
  rodape:{
    backgroundColor:"#e0ae67",
    position: "absolute",
    height: 20,
    left: 0,
    right: 0,
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
  headerContainer: {
    backgroundColor: "#e0ae67",
    padding: 24,
  },
  headerSubContainer: {
    backgroundColor: "#81656c",
    padding: 15,
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
  },
});

