import { Button, Input, Text } from "@rneui/base";
import { Image, makeStyles } from "@rneui/themed";
import { Link, useRouter } from "expo-router";
import { Alert,TextInput, View } from "react-native";
import useNavigationExitOnBack from "../hooks/useNavigationExitOnBack";
import { globalStyles } from "../styles";
import { useState } from "react";


import StyledButton from "../components/StyledButton";
import useAuth from "../firebase/hooks/useAuth";
import Loading from "../components/Loading";


export default function _screen() {
  useNavigationExitOnBack();

  // const styles = useStyles();
  const router = useRouter();

  const { login, loading } = useAuth();

  const [email, setEmail] = useState("fulano@example.com");
  const [password, setPassword] = useState("123456");

  if (loading) return <Loading />;

  return (
      // <View style={globalStyles.item}>
        <View style={globalStyles.containerIndex}>
          <View>
            <Image source={require('../img/logo.png')} style={globalStyles.logoGrande} />
          </View>
          <View style={globalStyles.containerLogin}>
            <View style={globalStyles.emlinha}>
              <Text style={globalStyles.register}>Usuário:</Text>
              <TextInput
                style={globalStyles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={globalStyles.emlinha}>
              <Text style={globalStyles.register}>Senha:</Text>
              <TextInput
              style={globalStyles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              />
            </View>
          </View>
        {/* </View> */}
        {/* <View style={globalStyles.containerIndex}> */}
          <StyledButton
            title="Login"
            onPress={async () => {
              try {
                await login(email, password);
                router.push("/(auth)/(home)/home");
              } catch (error: any) {
                Alert.alert("Login error", error.toString());
              }
            }}
             style={globalStyles.login}
          />

          <Link href="/register">
            <Text style={globalStyles.linkText}>Criar Conta</Text>
          </Link>
        </View>
      // </View>
  );
}

