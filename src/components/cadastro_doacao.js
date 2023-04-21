import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CadastroDoacao = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [doador, setDoador] = useState("");
  const [tipoItem, setTipoItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [data, setData] = useState("");

  // Função para manipular o envio do formulário
  const handleSubmit = () => {
    // Realizar o envio dos dados para o servidor ou executar a lógica desejada
    console.log("Dados do formulário:", doador, tipoItem, quantidade, data);
    // Limpar os campos do formulário após o envio
    setDoador("");
    setTipoItem("");
    setQuantidade("");
    setData("");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo.png")} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={styles.title}>Cadastro de Doações</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDoador}
        value={doador}
        placeholder="Nome do doador"
      />
      <TextInput
        style={styles.input}
        onChangeText={setTipoItem}
        value={tipoItem}
        placeholder="Tipo de item doado"
      />
      <TextInput
        style={styles.input}
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setData}
        value={data}
        placeholder="Data da doação"
      />
      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textbtn}>Cadastrar doação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#696969",
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#FF0000",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    backgroundColor: "white",
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
  textbtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 4,
  },
});

export default CadastroDoacao;
