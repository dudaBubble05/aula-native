import { StyleSheet, Image, TextInput } from 'react-native';
import { use, useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [texto, atualizaTexto] = useState('Bye guys, Hi ladies 💋')
  const [email, atualizaEmail] = useState('exemplo@mail.com');
  const [telefone, atualizaTelefone] = useState('(16) 99805-4456')

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
        style={{
          fontSize: 20
        }}
        value={texto}
        onChangeText={atualizaTexto}
      />
      <TextInput
        style={{
          fontSize: 30,
        }}
        value={telefone}
        onChangeText={atualizaTelefone}
        inputMode='numeric'
      />
      <TextInput
        style={{
          fontSize: 25
        }}
        value={email}
        onChangeText={atualizaEmail}
        inputMode='email'
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
