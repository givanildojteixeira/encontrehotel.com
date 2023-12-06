import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/base";
import Icon from 'react-native-vector-icons/Ionicons';

export const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

export const isCancelamentoGratis = (isCancela ) => {
    let textoCancelamento;
    // if (isCancela.equals) {
    if (isCancela === "S") {
      textoCancelamento = '*Cancelamento grátis';
    } else {
      textoCancelamento = '*Cancelamento pode ter tarifas';
    }
    return (
      <View>
        <Text>{textoCancelamento}</Text>
      </View>
    );
  };

  export const Estrelas = ({ quantidade }) => {
    const estrelas = Array.from({ length: quantidade }, (_, index) => index + 1);
    return (
      <View style={{ flexDirection: 'row' }}>
        {estrelas.map((estrela) => (
          <Icon name="star" size={20} color="gold" key={estrela} />
        ))}
      </View>
    );
  };