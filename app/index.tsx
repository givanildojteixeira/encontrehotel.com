import { Button, Input, Text } from "@rneui/base";
import { Image, makeStyles } from "@rneui/themed";
import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import useNavigationExitOnBack from "../hooks/useNavigationExitOnBack";
import { globalStyles } from "../styles";


export default function _screen() {
  useNavigationExitOnBack();

  const styles = useStyles();
  const router = useRouter();

  const handleLogin = () => {
    console.log("TODO: login user!");
    router.push("/(auth)/(home)/home");
  };

  return (
    // <View>
      <View style={styles.container}>
      <View>
        <Image source={require('../img/logo.png')} style={globalStyles.logoGrande} />
      </View>
        <Input label="Email" placeholder="email" />
        <Input label="Password" placeholder="password" secureTextEntry />
        <Button
          title="Entrar"
          containerStyle={styles.login}
          onPress={handleLogin}
          />

        <Link href="/register">
          <Text style={styles.register}>Criar Conta</Text>
        </Link>
      </View>
    // </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  login: {
    width: "100%",
    paddingHorizontal: 8,
  },
  register: {
    color: theme.colors.primary,
    fontWeight: "600",
  },
}));
