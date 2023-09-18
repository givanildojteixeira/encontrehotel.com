
import { Button, ScrollView, StyleSheet, Text, Alert, View, TouchableOpacity, TextInput} from "react-native";
import React, { useState } from "react";
import CarRepository, { Car } from "../database/CarRepository";

import "../global.css";

const repository = new CarRepository();

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);

  const create = async () => {
    const id = await repository.create({
      brand: "VW",
      model: "Fusca",
      hp: Math.floor(Math.random() * 100),
    });
    console.log("Created: ", id);
    await all();
  };

  const all = async () => {
    const cars = await repository.all();
    await contarRegistros();
    setCars(cars);
  };
  const filtroHp = async () => {
    const cars = await repository.filtroHp(parseInt(filtroPotMin),parseInt(filtroPotMax));
    await contarRegistros();
    setCars(cars);
    setTexto("Veículos selecionados: " + cars.length);
  };
  
  const contarRegistros = async ()=> {
    const registros = await repository.contarAll();
    setTexto("Total de Veículos: " + registros);
  };

  const clear = async ()=> {
    const cars = await repository.removeAll();
    await contarRegistros();
    setCars(cars);
  };

  const remove = async () => {
    const rowsAffected = await repository.remove(parseInt(IdCarSelecionado));
    console.log("Removido: ", rowsAffected);
    await all();
    Alert.alert("Remoção! " ,"Registro " + parseInt(IdCarSelecionado) + " removido!");
  };


  // Função que é chamada quando o TouchableOpacity é pressionado
    const [resposta, setTexto] = useState('');
    const handlePress = (car: Car) => {
      const resposta = "Veiculo selecionado: " + car.id + "  " + car.brand + ":" + car.model;
      setIdCarSelecionado('' + car.id );
      setTexto(resposta);
      // exibirAlerta(resposta);
    };

    // Função para exibir a mensagem de alerta
    const exibirAlerta = (resposta:string) => {
      Alert.alert(
        'Título do Alerta',
        resposta + '-'+ IdCarSelecionado,
        [
          {
            text: 'OK', // Botão principal do alerta
          },
          {
            text: 'Remover', // Botão principal do alerta
            onPress: () => remove(),
          },
        ],
        { cancelable: false }
      );
    };

    //textInput
    const [IdCarSelecionado, setIdCarSelecionado] = useState('');
    const handleInputChange = (novoTexto: string) => {
      setIdCarSelecionado(novoTexto);
    };

    //Filtro Potencia
    const [filtroPotMin, setIfiltroPotMin] = useState('');
    const [filtroPotMax, setIfiltroPotMax] = useState('');
    const alteraFiltroPotMin = (novoValor: string) => {
      setIfiltroPotMin(novoValor);
    };
    const alteraFiltroPotMax = (novoValor: string) => {
      setIfiltroPotMax(novoValor);
    };
  
    const handleSubmit = () => {
      // Faça algo com o texto inserido, por exemplo, exibir em um alerta
      alert(`Texto inserido: ${IdCarSelecionado}`);
    };

  return (
    
    <View style={styles.container}>
    
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <Text style={styles.h1}>
          Módulo 04
        </Text>
        <Text style={styles.h2}>
        Persistência de Dados Local com SQLite.
        </Text>
      </View>

      {/* excluir Veiculo */}
      <View style={styles.headerSubContainerRow}>
        {/* <SearchBar onSearch={handleSearch} /> */}
        <Text style={styles.h2}>Remover o veículo com a id: </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={IdCarSelecionado}
          keyboardType="numeric" // Aceita apenas números no teclado
        />
        <Button title="Remover" onPress={remove} />
      </View>

      {/* pesquisa de potencia */}
      <View style={styles.headerSubContainerRow}>
        <Text style={styles.h2}>Potência de: </Text>
        <TextInput
          style={styles.input}
          onChangeText={alteraFiltroPotMin}
          value={filtroPotMin}
          keyboardType="numeric" // Aceita apenas números no teclado
        />
        <Text style={styles.h2}>a      </Text>
        <TextInput
          style={styles.input}
          onChangeText={alteraFiltroPotMax}
          value={filtroPotMax}
          keyboardType="numeric" // Aceita apenas números no teclado
        />
        <Button title="Fitrar" onPress={filtroHp} />
      </View>

      {/* Botoes navegação */}
      <View style={styles.headerRow}>
        <Button onPress={create} title="Criar"/>
        <Button onPress={clear} title="Limpar" />
        <Button onPress={all} title="Listar" />
      </View>

      {/* Lista de Veiculos */}
      <ScrollView>
      {cars.map((car) => (
        <TouchableOpacity onPress={() => handlePress(car)}>
          <View style={styles.containerMap}>
            <Text style={styles.title}> Veículo: {car.id}</Text>
            <Text style={styles.desc}> Modelo: {car.brand} - {car.model} Potência: {car.hp}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
      
      {/* Rodapé  */}
      <View style={styles.rodape}>
      <Text style={styles.h2} id="campoTexto">
        {resposta}
      </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  rodape:{
    backgroundColor:"#e0ae67",
    position: "absolute",
    height: 30,
    left: 0,
    right: 0,
    textAlignVertical:"top",
    textAlign:"center",
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
  containerMap: {
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
    borderStyle:"solid",
  },
  headerContainer: {
    backgroundColor: "#e0ae67",
    padding: 24,
  },
  headerSubContainer: {
    backgroundColor: "#81656c",
    padding: 15,
  },
  headerSubContainerRow: {
    backgroundColor: "#81656c",
    padding: 15,
    flexDirection: "row",
    marginTop: 1,
    justifyContent:"center",
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
    marginTop: 1,
    justifyContent:"center",
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
    marginBottom:1,
  },
  input: {
    borderWidth: 1, // Largura da borda
    borderColor: '#ccc', // Cor da borda
    borderRadius: 5, // Raio de borda para arredondar
    paddingHorizontal: 10, // Espaçamento interno para texto
    width: 50, // Largura do TextInput
    backgroundColor: 'white', // Fundo branco
    marginEnd: 20, // Margem depois
  },
});

