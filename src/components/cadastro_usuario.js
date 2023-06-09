import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "../service/firebase";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmai] = useState("");
  const [senha, setSenha] = useState("");

  //Autenticação com o firebase
  const loginFirebase = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(nome, email, senha)
      .then((userCredential) => {
        console.log("USER:" + userCredential);
      })
      .catch((error) => {
        console.log(" errorMessage:" + error);
      });
  };
  useEffect(() => {}, []);

  const cadastro = () => {
    alert("CADASTRO EFETUADO COM SUCESSO");
  };

  const login = () => {
    alert("BEM VINDO A CORRENTE DO BEM");
  };
  return (
    <View style={styles.container}>
      <Text> </Text>
      <Image style={styles.imagem} source={require("../../assets/logo.png")} />
      <StatusBar style="auto" />
      <TextInput placeholder="Seu Nome ..." style={styles.textInput} />
      <TextInput placeholder="Seu Email" style={styles.textInput} />
      <TextInput
        secureTextEntry={true}
        placeholder="Sua Senha"
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text> CADASTRAR </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLogin} onPress={() => login()}>
        <Text> LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 25,
    paddingLeft: 50,
    borderWidth: 3,
    marginVertical: 6,
    borderColor: "red",
  },

  btnCadastro: {
    backgroundColor: "gray",
    borderRadius: 25,
    paddingLeft: 0,
    borderWidth: 3,
    marginVertical: 6,
    borderColor: "#8b0000",
    alignItems: "center",
    width: "100%",
    height: 40,
  },

  btnLogin: {
    backgroundColor: "#8b0000",
    borderRadius: 25,
    paddingLeft: 0,
    borderWidth: 3,
    marginVertical: 6,
    borderColor: "#8b0000",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
});
