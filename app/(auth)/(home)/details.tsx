import { View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { Text } from "@rneui/base";

export default function details() {
  const { brand, model, hp } = useGlobalSearchParams();

  console.log(brand, model, hp);

  return (
    <View>
      <Text h2>Car Details</Text>
      <Text h4>Model: {model}</Text>
      <Text h4>Brand: {brand}</Text>
      <Text h4>HP: {hp}</Text>
    </View>
  );
}
