import React, { useState, useEffect } from 'react';
import { useGlobalSearchParams, useNavigation } from "expo-router";
import { View, FlatList, TouchableOpacity, Modal, Alert, } from 'react-native';
import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from "../../../styles";
import * as utils from "../../../utils";
import { data } from "../../../mocks/data";

import { ImageBackground } from 'react-native';
import useCollection from '../../../firebase/hooks/useCollection';
import Hotel from '../../../types/Hotel';

export default function details() {
  const { id, nome, estrelas,local, vista, descricao, quarto, cancelamento ,preco, adicionais} = useGlobalSearchParams();
  const navigation = useNavigation();
  
  
  
  const handleButtonPress = (qual: number) => {
    const parametrosParaEnviar = {
      id, nome, estrelas, local, vista, descricao, quarto, cancelamento, preco, adicionais,
    };
    
    if (qual === 1) {
      //gravar favoritos
      const { data, create, remove, refreshData, loading } = useCollection<Hotel>("hoteis");
      //ajustes
      // let numnroestrela = parseInt(estrelas +'');
      {async () => {
        try {
          await create({
            nomeHotel: nome as string ,
            nroEestrelas: estrelas as string,
            localizacao: local as string,
            pontoVista: vista as string,
            observacao : descricao as string,
            tipoQuarto: quarto as string,
            cancela: cancelamento as string,
            valor: preco as string,
            opcionais: adicionais as string,
          });

          await refreshData();
        } catch (error: any) {
          Alert.alert("Create Book error", error.toString());
        }
      }}

      navigation.navigate('favoritos', parametrosParaEnviar as { [key: string]: any });

    } else if (qual === 2) {
      navigation.navigate('quartos', parametrosParaEnviar as { [key: string]: any });
    } else {
      navigation.navigate('reservar', parametrosParaEnviar as { [key: string]: any });
    }
  };

  const [selectedItemSources, setSelectedItemSources] = useState([]);

  useEffect(() => {
    // Obtenha o item correspondente ao ID
    const selectedItem = data.find((item) => item.id === id);
  
    // Atualize o estado com as fontes correspondentes
    setSelectedItemSources(selectedItem ? selectedItem.sources : []);
  }, [id]);
  
 
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(id, selectedItemSources)}>
      <Image source={item} style={globalStyles.image} />
    </TouchableOpacity>
  );
  

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImagePress = (id, sources) => {
    // Aqui, você pode ajustar a lógica para garantir que a imagem correta seja selecionada.
    // Por exemplo, pode ser algo como sources[id - 1] para obter a imagem com base no ID.
    const selectedImage = sources[id];
    
    setSelectedImage(selectedImage);
    setModalVisible(true);
  };

  const ModalImage = () => (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={globalStyles.modalContainer}>
        {selectedImage && (
          <ImageBackground
            source={selectedImage}
            style={globalStyles.modalImage}
            resizeMode="contain"
          />
        )}
        <TouchableOpacity
          style={globalStyles.modalCloseButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={globalStyles.modalCloseText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
  <View style={globalStyles.item}>
    <View style={globalStyles.subitem}>
      <Text style={globalStyles.h2}>{nome}</Text>
      <utils.Estrelas quantidade={estrelas} />
    </View>
    <View style={globalStyles.imageGalleryContainer}>
    <FlatList
      data={selectedItemSources}
      keyExtractor={(item) => item}
      numColumns={3}
      renderItem={renderItem}
    />
    </View>
      {/* Renderize o Modal */}
      <ModalImage />
    <View style={globalStyles.separator} />

    <View style={globalStyles.productContainerDetail}>
      <View style={globalStyles.columnDetail}>
          <Text style={globalStyles.dValorDetails}>{utils.formatarPreco(preco)}</Text>
            <View style={globalStyles.deschotel}>
              <Icon name="location" size={20} color="#979595" />
              <Text style={globalStyles.h3}>{local}</Text>
            </View>
            <View style={globalStyles.deschotel}>
              <Icon name="walk" size={20} color="#979595" />
              <Text style={globalStyles.h3}>{vista}</Text>
            </View>
            <Text style={globalStyles.h3}>{descricao}</Text>
          
           <View style={globalStyles.separator} />

            <Text style={globalStyles.h3}>Quarto:{quarto}</Text>
            {/* <Text style={globalStyles.h3}>{quarto}</Text> */}
            <Text style={globalStyles.h3}>Adicionais:</Text>
            <Text style={globalStyles.h3}>{adicionais}</Text>
      </View>
      <View style={globalStyles.columnDetail}>
        <TouchableOpacity style={globalStyles.buttonFavoritos} onPress={() => handleButtonPress(1)}>
          <Text style={globalStyles.buttonText}>Adicionar Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => handleButtonPress(2)}>
          <Text style={globalStyles.buttonText}>Opções de Quarto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.buttonReservar} onPress={() => handleButtonPress(3)}>
          <Text style={globalStyles.buttonText}>Reservar</Text>
        </TouchableOpacity>
        <Text style={globalStyles.h3a}>{utils.isCancelamentoGratis(cancelamento)}</Text>
        <Text style={globalStyles.h4}>**1 Diária +impostos</Text>
      </View>
    </View>

  </View>
)};
