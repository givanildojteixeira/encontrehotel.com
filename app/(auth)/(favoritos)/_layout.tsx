import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="details"     options={{
      title: "Voltar para a Lista",
      headerStyle: {
        height: 20, // Ajuste esta altura conforme necessário
      },
    }} />
    </Stack>
  );
}
