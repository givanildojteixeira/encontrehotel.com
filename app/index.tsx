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
  const [password, setPassword] = useState("1234456");

  if (loading) return <Loading />;


  // const handleLogin = () => {
  //   console.log("TODO: login user!");
  //   router.push("/(auth)/(home)/home");
  // };

  return (
    // <View>
      <View style={globalStyles.containerIndex}>
      <View>
        <Image source={require('../img/logo.png')} style={globalStyles.logoGrande} />
      </View>
        {/* <Input label="Email" placeholder="email" />
        <Input label="Password" placeholder="password" secureTextEntry /> */}

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
        style={{ marginTop: 12 }}
      />


        {/* <Button
          title="Entrar"
          containerStyle={globalStyles.login}
          onPress={handleLogin}
          /> */}

        <Link href="/register">
          <Text style={globalStyles.register}>Criar Conta</Text>
        </Link>
      </View>
    // </View>
  );
}

