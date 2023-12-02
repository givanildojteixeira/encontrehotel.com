import { ThemeProvider } from "@rneui/themed"
import { Stack } from "expo-router";
import React from "react";
import {  StyleSheet, Text,  View} from "react-native";
import { Icon } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import "../global.css";

export default function _layout() {
  // const { theme } = useTheme();
  return (

    <ThemeProvider>
            {/* Cabeçalho */}
          <View style={styles.headerContainer}>
            <Text style={styles.h1}>
            <Icon type="antdesign" name="home" />
              EncontreHotel.com
            </Text>
            <Text style={styles.h2}>Os melhores hoteis a preços acessíveis</Text>
        </View>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ title: "Create Account" }} />
      </Stack>
    </ThemeProvider>
  )};

const styles = StyleSheet.create({


  headerContainer: {
    backgroundColor: "#7cfc00",
    padding: 35,
    // borderWidth: 1, // Largura da borda
    borderRadius: 5, // Raio de borda para arredondar
    height:120,
  },
  h1: {
    marginTop: 8,
    fontSize: 30,
    textAlign:"center",
  },
  h2: {
    marginTop: 2,
    fontSize: 16,
    textAlign:"center",
  },
  
});
