import React, { useState, Component } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import { globalStyles } from "../../../styles";
import { Link, useRouter } from "expo-router";
// import Icon from 'react-native-vector-icons/Ionicons';
import { Icon } from "@rneui/base";
import useStore from '../../../states/store';
import { TextInputMask } from 'react-native-masked-text';
import StyledButton from '../../../components/StyledButton';
// import MaskedTextInput, { TextInputMask } from 'react-native-masked-text';

export default function _screen() {
  
  const router = useRouter();
  const [inputText, setInputText] = useState('');

  const cidade = useStore((state) => state.cidade);
  const setCidade = useStore((state) => state.setCidade);
  const dataChegada = useStore((state) => state.dataChegada);
  const setDataChegada = useStore((state) => state.setDataChegada);
  const dataSaida = useStore((state) => state.dataSaida);
  const setDataSaida = useStore((state) => state.setDataSaida);
  
  // const handleInputChange = (text: string) => {
  //   setInputText(text);
  // };

  const handleButtonPress = () => {
    // Faça algo com o valor inserido, por exemplo, imprima no console
    // console.log('Texto inserido:', inputText);
    // Faça algo com a data selecionada, por exemplo, imprima no console
    // console.log('Data selecionada:', selectedDate);
    // setCidade('Guarapuava'); // Ou o valor do seu TextInput
    // setDataChegada('2023-01-01'); // Ou o valor do seu TextInput
    // setDataSaida('2023-01-10'); // Ou o valor do seu TextInput

    router.push("/(auth)/(home)/listaHotel");
  };

  // calendario

  // calendario

  return (
      <View style={globalStyles.item}>
        <Text style={globalStyles.h2Home}>Aqui você encontra os melhores lugares para descançar!</Text>
        <View style={globalStyles.separator} />
        
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Icon type="ionicon" name="search" size={20} color="black" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Pesquise pelo nome do Hotel ou pela cidade"
              value={cidade}
              onChangeText={(text) => setCidade(text)}
              style={globalStyles.cInputBox}
            />
          </View>
          {/* Segunda linha */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Icon type="ionicon" name="calendar" size={20} color="black" style={{ marginRight: 10 }} />
            <TextInputMask
              style={globalStyles.cInputBox}
              placeholder="Chegada"
              type={'datetime'}
              options={{format: 'DD/MM/YYYY', }}
              value={dataChegada}
              onChangeText={(text) => setDataChegada(text)}
            />

            <Icon type="ionicon"  name="calendar" size={20} color="black" style={{ marginRight: 10 }} />
            <TextInputMask
              style={globalStyles.cInputBox}
              placeholder="Saída"
              type={'datetime'}
              options={{format: 'DD/MM/YYYY', }}
              value={dataSaida}
              onChangeText={(text) => setDataSaida(text)}
            />
          </View>

        <StyledButton
            title="Pesquisar"
            style={globalStyles.login}
            onPress={handleButtonPress} 
          />

        </View>
        <View style={globalStyles.separator} />
        
        <View>
        <Image source={require('../../../img/slogan1.jpeg')} style={globalStyles.imagemCapa} />
        </View>
      </View>
  );

};
  
