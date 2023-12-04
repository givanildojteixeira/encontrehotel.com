import React, { useState, useEffect } from 'react';
import { useGlobalSearchParams } from "expo-router";
import { View, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';

import { Text } from "@rneui/base";
import { CheckBox } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from "../../../styles";
import * as utils from "../../../utils";
import { data } from "../../../mocks/data";
import { RadioButton } from 'react-native-paper';

import { ImageBackground } from 'react-native';

export default function details() {
  const { id, nome,estrelas,local, vista, descricao, cancelamento ,preco } = useGlobalSearchParams();

  const handleButtonPress = (qual: number) => {
    if (qual === 1) {
      console.log('Botão Opção de quarto!');
    } else if (qual === 2) {
      console.log('Botão Ver Localização!');
    } else {
      console.log('Botão Reservar!');
    }
  };
  
  const [checked, setChecked] = useState('first');
  //checkbox
  const [check1, setCheck1] = useState(false);

  return (
  <View style={globalStyles.item}>
    <View style={globalStyles.subitem}>
      <Text style={globalStyles.h2}>{nome}</Text>
      <utils.Estrelas quantidade={estrelas} />
    </View>

    <View style={globalStyles.separator} />

    <View style={globalStyles.productContainerDetail}>
      <View style={globalStyles.columnDetail}>
        <Text style={globalStyles.h3}>{descricao}</Text>
        <View style={globalStyles.deschotel}>
          <Icon name="location" size={20} color="#979595" />
          <Text style={globalStyles.h3}>{local}</Text>
        </View>
        <View style={globalStyles.deschotel}>
          <Icon name="walk" size={20} color="#979595" />
          <Text style={globalStyles.h3}>{vista}</Text>
        </View>
      </View>
      <View style={globalStyles.columnDetail}>
        <Text style={globalStyles.dValor}>{utils.formatarPreco(preco)}</Text>
        <Text style={globalStyles.h3a}>{utils.isCancelamentoGratis(cancelamento)}</Text>
        <Text style={globalStyles.h4}>**1 Diária +impostos</Text>
      </View>

      {/* <View style={globalStyles.separator} /> */}


    </View>

    <Text style={globalStyles.h2}>Dados da reserva:</Text>
    <Text style={globalStyles.h3}>Data entrada:</Text>
    <Text style={globalStyles.h3}>Data saída:</Text>
    <Text style={globalStyles.h3}>Tipo da acomodação:</Text>
    <View style={globalStyles.separator} />

    <Text style={globalStyles.h2}>Forma de pagamento:</Text>

    <View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text>Pix</Text>
      </View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text>Cartão de Crédito</Text>
      </View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
        />
        <Text>Boleto</Text>
      </View>
    </View>



    <View style={globalStyles.separator} />

    <CheckBox
      title="Concordo com os termos"
      checked={check1}
      onPress={() => setCheck1(!check1)}
      containerStyle={globalStyles.checkBoxContainer}
    />


        <TouchableOpacity style={globalStyles.button} onPress={() => handleButtonPress(1)}>
          <Text style={globalStyles.buttonText}>Confirmar a Reserva</Text>
        </TouchableOpacity>


  </View>
)};
