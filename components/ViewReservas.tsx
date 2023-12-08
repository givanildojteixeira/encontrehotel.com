import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";
import StyledButton from "./StyledButton";
import Hotel from "../types/Reserva";
import { useNavigation } from "expo-router";
import * as utils from "../utils";
import { globalStyles } from "../styles";
import { Icon } from "@rneui/base";

interface ViewHotelProps {
  hotel: Hotel;
  onDelete: Function;
}

export default function ViewReservas({ hotel, onDelete }: ViewHotelProps) {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={globalStyles.item}>
      <View style={globalStyles.subitem}>
        <Text style={globalStyles.h2}>{hotel.nomeHotel}</Text>
        <utils.Estrelas quantidade={hotel.nroEestrelas} />
      </View>
      {/* <View style={globalStyles.separator} /> */}

      <View >
        <View >
          <Text style={globalStyles.dValorDetails}>
            {utils.formatarPreco(hotel.valor)}
          </Text>
          <View style={globalStyles.deschotel}>
          <Icon type="ionicon" name="location" size={20} color="#979595"/>
            <Text style={globalStyles.h3}>{hotel.localizacao}</Text>
          </View>
          <View style={globalStyles.deschotel}>
            <Icon type="ionicon" name="walk" size={20} color="#979595" />
            <Text style={globalStyles.h3}>{hotel.pontoVista}</Text>
          </View>
          <Text style={globalStyles.h3}>{hotel.observacao}</Text>
          <Text style={globalStyles.h3}>Quarto:{hotel.tipoQuarto}</Text>
          {/* <View style={globalStyles.productContainerDetail}> */}
            {/* <View style={globalStyles.columnDetail}> */}
              <Text style={globalStyles.h3}>Data Chegada:{hotel.dataChegada}</Text>
              <Text style={globalStyles.h3}>Data Partida:{hotel.dataSaida}</Text>
              <Text style={globalStyles.h3}>Forma de Pagamento:{hotel.pagamento}</Text>
            {/* </View> */}
          {/* </View> */}
          <Text style={globalStyles.h3}>Adicionais:</Text>
          <Text style={globalStyles.h3}>{hotel.opcionais}</Text>
        </View>
        <View >
           <Text style={globalStyles.h3a}>
            {utils.isCancelamentoGratis(hotel.cancela)}
          </Text>
          <Text style={globalStyles.h4}>**1 Diária +impostos</Text>
        </View>
      </View>
       <View >
        <StyledButton
          title="Cancelar Reserva "
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
          style={{ width: "100%", backgroundColor: "darkred" }}
        />
        
      </View>
    </View>
  );
}
