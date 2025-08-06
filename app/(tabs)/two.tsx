import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [texto, atualizarTexto] = useState ('Olá Mundo');
  const [telefone, atualizarTelefone] = useState ('(11) 3325-5577');
  const [email, atualizarEmail ] = useState ('exemplo@mail.com');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image
      style={{
        width: 50,
        height: 50
      }}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }}
        />
         <TextInput 
        value={texto}
        onChangeText={atualizarTexto}
        inputMode='numeric'
        />
        <TextInput />
        <TextInput 
        value={telefone}
        onChangeText={atualizarTelefone}
        inputMode='numeric'
        />
        <TextInput />
        <TextInput 
        value={email}
        onChangeText={atualizarEmail}
        inputMode='email'
        />
        <TextInput />
        <Button
        title='ENVIAR'
        onPress={() => { alert( texto + ' ' + telefone ) }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});