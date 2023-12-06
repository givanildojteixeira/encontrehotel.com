import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "@rneui/base";
import { useTheme } from "@rneui/themed";

export default function _layout() {
  const { theme } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="ionicon" name="search"  />
          ),
          title: "Pesquisar",
        }}
      />

      <Tabs.Screen
        name="(favoritos)"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="ionicon" name="heart"  />
          ),
          title: "Favoritos",
        }}
      />
      <Tabs.Screen
        name="(reservas)"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="ionicon" name="calendar"  />
          ),
          title: "Reservas",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="antdesign" name="user"  />
          ),
          title: "Conta",
        }}
      />

    </Tabs>
  );

}
