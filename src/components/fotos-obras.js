import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const PermissionForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obras Executados em Abril</Text>
      <TextInput />

      <Image
        style={styles.image}
        source={require("../../assets/casa1.jpg")} // caminho e nome do arquivo da imagem do projeto
      />
      <Image
        style={styles.image}
        source={require("../../assets/imagen5.jpg")} // caminho e nome do arquivo da imagem do projeto
      />

      <Image
        style={styles.image}
        source={require("../../assets/casa8.jpg")} // caminho e nome do arquivo da imagem do projeto
      />

      <Image
        style={styles.image}
        source={require("../../assets/casa7.jpg")} // caminho e nome do arquivo da imagem do projeto
      />

      <TouchableOpacity style={styles.botao} onPress={() => voltar()}>
        <Text style={styles.textbtn}>Voltar </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#696969",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  textbtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 4,
  },
  image: {
    width: 340,
    height: 120,
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 30,
  },

  botao: {
    backgroundColor: "#B22222",
    borderRadius: 5,
    paddingLeft: 0,
    marginVertical: 8,
    alignItems: "center",
    width: "100%",
    height: 40,
  },
});

export default PermissionForm;
