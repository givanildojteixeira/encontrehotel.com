import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="listaHotel" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: "Voltar para a Lista", }} />
      <Stack.Screen name="reservar" options={{ title: "Voltar para a Lista", }} />
      <Stack.Screen name="quartos" options={{ title: "Voltar para a Lista", }} />
    </Stack>
    
  );
}
