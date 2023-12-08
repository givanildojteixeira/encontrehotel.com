import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";
import StyledButton from "./StyledButton";
import Hotel from "../types/Hotel";

interface ViewHotelProps {
  hotel: Hotel;
  onDelete: Function;
}

export default function ViewBook({ hotel, onDelete }: ViewHotelProps) {
  const router = useRouter();

  return (
    <View
      style={{ borderTopColor: "darkblue", borderTopWidth: 1, marginTop: 12 }}
    >
      <Text>id: {hotel.id}</Text>
      <Text>Nome: {hotel.nomeHotel}</Text>
      <Text>Vista: {hotel.pontoVista}</Text>
      <Text>Quarto: {hotel.tipoQuarto}</Text>

      <View style={{ flexDirection: "row" }}>
        <StyledButton
          title="View Book Details"
          onPress={() => {
            if (hotel.id) {
              router.push("/home/" + hotel.id);
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
          title="Delete"
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
