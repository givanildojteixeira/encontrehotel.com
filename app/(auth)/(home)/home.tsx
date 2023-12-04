import React, { useState } from 'react';
import { View, TextInput, Button} from 'react-native';
import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import { globalStyles } from "../../../styles";
import { Link, useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';


export default function _screen() {
  
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  
  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonPress = () => {
    // Faça algo com o valor inserido, por exemplo, imprima no console
    console.log('Texto inserido:', inputText);
    // Faça algo com a data selecionada, por exemplo, imprima no console
    // console.log('Data selecionada:', selectedDate);
    router.push("/(auth)/(home)/listaHotel");
  };


  return (
      <View style={globalStyles.item}>
        <Text style={globalStyles.h2}>Aqui você encontra os melhores lugares para descançar!</Text>
        <View style={globalStyles.separator} />
        
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Icon name="search" size={20} color="black" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Pesquise pelo nome do Hotel ou pela cidade"
              onChangeText={handleInputChange}
              value={inputText}
              style={globalStyles.cInputBox}
            />
          </View>
          {/* Segunda linha */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Icon name="calendar" size={20} color="black" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Chegada"
              onChangeText={handleInputChange}
              value={inputText}
              style={globalStyles.cInputBox}
            />
            <Icon name="calendar" size={20} color="black" style={{ marginRight: 10 }} />
            <TextInput
              placeholder="Saída"
              onChangeText={handleInputChange}
              value={inputText}
              style={globalStyles.cInputBox}
            />
          </View>



          <Button title="Pesquisar" onPress={handleButtonPress} />
        </View>

        
        <View style={globalStyles.separator} />
        
        <View>
        <Image source={require('../../../img/slogan1.jpeg')} style={globalStyles.imagemCapa} />

        </View>
        
  
      </View>
  );

};
  
