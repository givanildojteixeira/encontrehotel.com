import React, { useState } from 'react';
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { View, TouchableOpacity } from 'react-native';

import { Icon, Text } from "@rneui/base";
import { CheckBox } from "@rneui/themed";
import { globalStyles } from "../../../styles";
import * as utils from "../../../utils";
import { RadioButton } from 'react-native-paper';

export default function details() {
  const { id, nome, estrelas,local, vista, descricao, cancelamento, preco} = useGlobalSearchParams();
  const navigation = useNavigation();

  //checkbox
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  
  //radio box
  const [quarto, setQuarto] = useState('Quarto Single');
  const [adicionais, setAdicionais] = useState('');
  
  const handleSumButtonClick = () => {
    let sumDescription = '';
    if (check1) {sumDescription += 'Com uso da garagem ';}
    if (check2) {sumDescription += 'Com Café da Manhã ';}
    if (check3) {sumDescription += 'Com academia inclusa ';}
    setAdicionais(sumDescription.trim());
    console.log(sumDescription.trim());

  };

  const handleButtonPress = () => {
    handleSumButtonClick();
    console.log(adicionais);
    
    const parametrosParaEnviar = {
      id,
      nome,
      estrelas,
      local,
      vista,
      descricao,
      quarto,
      cancelamento,
      preco,
      adicionais,
    };
    navigation.navigate('details', parametrosParaEnviar as { [key: string]: any });

  };

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
          <Icon type="ionicon"  name="location" size={20} color="#979595" />
          <Text style={globalStyles.h3}>{local}</Text>
        </View>
        <View style={globalStyles.deschotel}>
          <Icon type="ionicon"  name="walk" size={20} color="#979595" />
          <Text style={globalStyles.h3}>{vista}</Text>
        </View>
      </View>
      <View style={globalStyles.columnDetail}>
        <Text style={globalStyles.dValor}>{utils.formatarPreco(preco)}</Text>
        <Text style={globalStyles.h3a}>{utils.isCancelamentoGratis(cancelamento)}</Text>
        <Text style={globalStyles.h4}>**1 Diária +impostos</Text>
      </View>

    </View>

    <Text style={globalStyles.h2}>Opções de cômodos disponíveis:</Text>

    <View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="Quarto Single"
          status={quarto === 'Quarto Single' ? 'checked' : 'unchecked'}
          onPress={() => setQuarto('Quarto Single')}
        />
        <Text>Quarto Single</Text>
      </View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="Quarto Duplo"
          status={quarto === 'Quarto Duplo' ? 'checked' : 'unchecked'}
          onPress={() => setQuarto('Quarto Duplo')}
        />
        <Text>Quarto Duplo</Text>
      </View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="Quarto Triplo"
          status={quarto === 'Quarto Triplo' ? 'checked' : 'unchecked'}
          onPress={() => setQuarto('Quarto Triplo')}
        />
        <Text>Quarto Triplo</Text>
      </View>
    </View>

    <View style={globalStyles.separator} />
    <Text style={globalStyles.h2}>Adicionais:</Text>

    <CheckBox
      title="Com uso da garagem"
      checked={check1}
      onPress={() => setCheck1(!check1)}
      containerStyle={globalStyles.checkBoxContainer}
    />
    <CheckBox
      title="Com Café da Manhã"
      checked={check2}
      onPress={() => setCheck2(!check2)}
      containerStyle={globalStyles.checkBoxContainer}
    />
    <CheckBox
      title="Academia inclusa"
      checked={check3}
      onPress={() => setCheck3(!check3)}
      containerStyle={globalStyles.checkBoxContainer}
    />

    <TouchableOpacity style={globalStyles.button} onPress={() => handleButtonPress()}>
      <Text style={globalStyles.buttonText}>Confirmar e Voltar</Text>
    </TouchableOpacity>


  </View>
)};
