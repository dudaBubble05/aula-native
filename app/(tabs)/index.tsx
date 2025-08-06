import { StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const handleEnviar = () => {
    Alert.alert(
      'Dados do Formulário',
      `Nome: ${nome}\nSobrenome: ${sobrenome}\nCPF: ${cpf}\nTelefone: ${telefone}\nE-mail: ${email}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        inputMode="text"
      />
      
      <TextInput
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
        style={styles.input}
        inputMode="text"
      />
      
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
        inputMode="numeric"
        maxLength={11}
      />
      
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        inputMode="tel"
      />
      
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        inputMode="email"
        autoCapitalize="none"
      />
      
      <Button
        title="ENVIAR"
        onPress={handleEnviar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});