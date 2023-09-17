import { View, Text } from "react-native";

import React from "react";
import useCounter from "../states/useCounter";
import "../global.css";

export default function Label() {
  const { counter } = useCounter();

  return (
    <View>
      <Text className="font-bold text-xl text-center "> {counter}</Text>
    </View>
  );
}