import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";
import StyledButton from "./StyledButton";
import Hotel from "../types/Hotel";
import { useGlobalSearchParams, useNavigation } from "expo-router";


interface ViewHotelProps {
  hotel: Hotel;
  onDelete: Function;
}

export default function ViewFavoritos({ hotel, onDelete }: ViewHotelProps) {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View
      style={{ borderTopColor: "darkblue", borderTopWidth: 1, marginTop: 12 }}
    >
      {/* <Text>id: {hotel.id}</Text> */}
      <Text>Nome: {hotel.nomeHotel}</Text>
      <Text>Vista: {hotel.pontoVista}</Text>
      <Text>Quarto: {hotel.tipoQuarto}</Text>

      <View style={{ flexDirection: "row" }}>
        <StyledButton
          title="Ver Hotel"
          onPress={() => {
            if (hotel.id) {
              // const parametrosParaEnviar = {id, nome, estrelas, local, vista, descricao, quarto, cancelamento, preco, adicionais,}
              console.log(hotel);
              navigation.navigate('details', hotel);
              // router.push("/home/" + hotel.id);
            } else {
              Alert.alert(
                "View error",
                "cannot access book details because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%" }}
        />

        <StyledButton
          title="Remover "
          onPress={() => {
            if (hotel.id) {
              Alert.alert("Delete Book", "Are you sure?", [
                {
                  text: "Yes",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete book because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%", backgroundColor: "darkred" }}
        />
      </View>
    </View>
  );
}
