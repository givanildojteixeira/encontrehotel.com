import { View, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Button, Text } from "@rneui/base";
import useNavigationExitOnBack from "../../hooks/useNavigationExitOnBack";
import { useRouter } from "expo-router";
import { user } from "../../mocks/user";

export default function _screen() {
  useNavigationExitOnBack();
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text h1>Profile</Text>

      <Text>{user.name}</Text>
      <Text>{user.email}</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: Constants.statusBarHeight,
  },
});
