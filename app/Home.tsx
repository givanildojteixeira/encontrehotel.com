import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import Label from "../components/Label";
import useCounter from "../states/useCounter";
import "../global.css";

export default function Home() {
  const { add, reset } = useCounter();
  
  return (
    <View className="flex-1 items-center justify-center bg-red-200">

      <TouchableOpacity className="bg-blue-400 absolute inset-x-0 top-0 h-10  "/>
              
      <TouchableOpacity className="bg-blue-700 absolute inset-x-0 top-10 h-16  ">
        <Text className="text-white text-center text-3xl ">Módulo 2</Text>
        <Text className="text-white text-center font-bold font-extralight">
          Estilização de Componentes com NativeWind
        </Text>
      </TouchableOpacity>

      <Text className="font-bold text-xl text-center ">
        Contador = <Label />
      </Text>
      
      <TouchableOpacity className="bg-green-700 p-4 rounded-lg mt-4"
        onPress={() => add()}>
        <Text className="text-white font-bold ">Contador</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-red-700 p-4 rounded-lg mt-4"
        onPress={() => reset()}>
        <Text className="text-white font-bold ">Zerar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <TouchableOpacity className="bg-blue-400 absolute inset-x-0 bottom-0 h-10  "/>

    </View>
  );
}
