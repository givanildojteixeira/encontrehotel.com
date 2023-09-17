import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInputMask } from 'react-native-masked-text';

export interface OfferProps {
  veiculo: string;
  modelo: string;
  ano: number;
  chassi: string;
  preco: number;
}

export default function Offer({ veiculo, modelo, ano, chassi, preco }: OfferProps) {
  return (
    <View style={styles.container}>
      <View style={styles.image} />

      <Text style={styles.title}> Veículo: {veiculo}</Text>
      <Text style={styles.desc}> Modelo: {modelo} - Ano:  {ano}</Text>
      <Text style={styles.tags}>Chassi: {chassi}</Text>

      <TextInputMask 
        style={styles.price}
        type="money"
        value={preco}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
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
  },
  price: {
    fontSize: 20,
    marginTop: 5,
    textAlign:"right",
    fontWeight: "bold",
    color: "blue",
  },
  tags: {
    color: "green",
    marginTop: 1,
  },
});
