import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const PermissionForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setdata] = useState('');
  const [hora, sethora] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handledataChange = (text) => {
    setdata(text);
  };

  const handlehoraChange = (text) => {
    sethora(text);
  };

  const handleSubmit = () => {
    // Aqui será para fazer a lógica para enviar os dados de cadastro para o servidor
    console.log('Digite Seu Nome', name);
    console.log('Qual sera o serviço prestado ?', description);
    console.log('Qual a data da prestaçao de serviço ?', data);
    console.log('Qual a hora da prestaçao de serviço ?', hora);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/servico.png')} // caminho e nome do arquivo da imagem do projeto
      />
      <Text style={styles.title}>Cadastre Uma Prestaçao de Serviço </Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Digite Seu Nome" 
      />
      <TextInput
        style={styles.input}
        onChangeText={handleDescriptionChange}
        value={description}
        placeholder="Qual sera o serviço prestado ?"
      />

<TextInput
        style={styles.input}
        onChangeText={handledataChange}
        value={data}
        placeholder="Qual a data da prestaçao de serviço ?"
      />

<TextInput
        style={styles.input}
        onChangeText={handlehoraChange}
        value={hora}
        placeholder="Qual a hora da prestaçao de serviço ?"
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit} >
      <Text style={styles.textbtn}>Cadastrar Serviço </Text>
      </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#585858',
  },
  textbtn:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F5A9A9',
    marginTop: 4,
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  botao: {
    backgroundColor: '#FF0000',
    borderRadius: 5,
    paddingLeft: 0,
    marginVertical: 8,
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
});

export default PermissionForm;