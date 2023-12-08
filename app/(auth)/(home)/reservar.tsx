import React, { useState, useEffect } from 'react';
import { Link, useGlobalSearchParams } from "expo-router";
import { View, TouchableOpacity, Modal, StyleSheet, Dimensions, Alert } from 'react-native';

import { Icon, Text } from "@rneui/base";
import { CheckBox } from "@rneui/themed";
import { globalStyles } from "../../../styles";
import * as utils from "../../../utils";
import { data } from "../../../mocks/data";
import { RadioButton } from 'react-native-paper';
import useStore from '../../../states/store';
import useAuth from '../../../firebase/hooks/useAuth'
import useCollection from '../../../firebase/hooks/useCollection'

export default function details() {
  const { id, nome,estrelas,local, vista, descricao, quarto, cancelamento ,preco, adicionais } = useGlobalSearchParams();

  const cidade = useStore((state) => state.cidade);
  const dtaChegada = useStore((state) => state.dataChegada);
  const dtaSaida = useStore((state) => state.dataSaida);

  const { user } = useAuth()
  const {  create, refreshData } = useCollection('users/' + user?.uid + '/reservas')
  console.log('fav: ', data)

  const handleButtonPress = async (qual: number) => {

    if (qual === 1) {
      //reservar
      try {
        await create({
          nomeHotel: nome as string,
          nroEestrelas: estrelas as string,
          localizacao: local as string,
          pontoVista: vista as string,
          observacao: descricao as string,
          tipoQuarto: quarto as string,
          cancela: cancelamento as string,
          valor: preco as string,
          opcionais: adicionais as string,
          dataChegada:dtaChegada as string,
          dataSaida:dtaSaida as string,
          pagamento: cPagto as string,
        })

        await refreshData()
      } catch (error: any) {
        Alert.alert('Create Hotel error', error.toString())
      }
      Alert.alert('Reserva concluída com sucesso, consulte a aba de Reservas!')
  
    } else if (qual === 2) {
      console.log('Botão Ver Localização!');
    } else {
      console.log('Botão Reservar!');
    }
  };
  //radio
  const [cPagto, setChecked] = useState('first');
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
          <Icon type="ionicon" name="location" size={20} color="#979595" />
          <Text style={globalStyles.h3}>{local}</Text>
        </View>
        <View style={globalStyles.deschotel}>
          <Icon type="ionicon" name="walk" size={20} color="#979595" />
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
    {/* <Text style={globalStyles.h3}>Cidade:{cidade}</Text>
    <Text style={globalStyles.h3}>Data entrada:{dataChegada}</Text>
    <Text style={globalStyles.h3}>Data saída:{dataSaida}</Text> */}

    <View style={globalStyles.Container2ColunasJustificadas}>
      <View style={globalStyles.colunasDivididas}>
        <Text style={globalStyles.h3}>Cidade:</Text>
        <Text style={globalStyles.h3}>Data entrada:</Text>
        <Text style={globalStyles.h3}>Data saída:</Text>
      </View>
      <View style={globalStyles.colunasDivididas}>
        <Text style={globalStyles.h3}>{cidade}</Text>
        <Text style={globalStyles.h3}>{dtaChegada}</Text>
        <Text style={globalStyles.h3}>{dtaSaida}</Text>
      </View>
    </View>

    <Text style={globalStyles.h3}>Tipo da acomodação: {quarto}</Text>
    <View style={globalStyles.separator} />

    <Text style={globalStyles.h2}>Forma de pagamento:</Text>

    <View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="Pix"
          status={cPagto === 'Pix' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Pix')}
        />
        <Text>Pix</Text>
      </View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="Cartão de Crédito"
          status={cPagto === 'Cartão de Crédito' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Cartão de Crédito')}
        />
        <Text>Cartão de Crédito</Text>
      </View>
      <View style={globalStyles.emlinha}>
        <RadioButton
          value="Boleto"
          status={cPagto === 'Boleto' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('Boleto')}
        />
        <Text>Boleto</Text>
      </View>
    </View>



    <View style={globalStyles.separator} />

    <View style={globalStyles.emlinha}>
      <CheckBox
        // title="Concordo com os termos"
        checked={check1}
        onPress={() => setCheck1(!check1)}
        containerStyle={globalStyles.checkBoxContainer}
      />
      <Link href="/termos">
        <Text style={globalStyles.linkText}>Concordo com os termos</Text>
      </Link>
    </View>


        <TouchableOpacity style={globalStyles.button} onPress={() => handleButtonPress(1)}>
          <Text style={globalStyles.buttonText}>Confirmar a Reserva</Text>
        </TouchableOpacity>


  </View>
)};
