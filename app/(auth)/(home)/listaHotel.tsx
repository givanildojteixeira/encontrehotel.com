import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Icon, Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { data } from "../../../mocks/data";
import { globalStyles } from "../../../styles";
import * as utils from "../../../utils";
import useStore from "../../../states/store";


export default function _screen() {
  const navigation = useNavigation();

  const setCidade = useStore((state) => state.setCidade);
  
  const handlePress = (item: { local: any; }) => {
    //acerte os dados do store
    const novaCidade = item.local;
    setCidade(novaCidade);
    console.log('cidade escolhida:', item.local);

    navigation.navigate('(auth)', { screen: '(home)', params: { screen: 'details', params: item } });
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={globalStyles.item}>
      <View style={globalStyles.item}>
        <View>
          <Image source={item.imagemCapa} style={globalStyles.imagemCapa} />
        </View>
        
        <View>
          <Text style={globalStyles.h2}>{item.nome}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <utils.Estrelas quantidade={item.estrelas} />
                <View style={globalStyles.deschotel}>
                  <Icon type="ionicon" name="location" size={20} color="#979595" />
                  <Text style={globalStyles.h3}>{item.local}</Text>
                </View>
                <View style={globalStyles.deschotel}>
                  <Icon type="ionicon" name="walk" size={20} color="#979595" />
                  <Text style={globalStyles.h3}>{item.vista}</Text>
                </View>
              </View>
            <View>
              <Text style={globalStyles.dValor}>{utils.formatarPreco(item.preco)}</Text>
            </View>
          </View>
          <Text style={globalStyles.h3}>{item.descricao}</Text>
          <Text style={globalStyles.h3a}>{utils.isCancelamentoGratis(item.cancelamento)}</Text>
          <Text style={globalStyles.h4}>**1 Diária +impostos</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View >
        <Text style={globalStyles.h2Home}>Parabéns, encontramos 3 locais perfeitos! </Text>
        {/* <Text>
        Local: {cidade} Data Entrada: {dataChegada} Data Saída: {dataSaida};
      </Text> */}
      </View>
    <View style={globalStyles.separator} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.nome}
        renderItem={renderItem}
      />
    </View>
  );
}
