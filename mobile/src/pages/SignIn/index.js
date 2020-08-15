import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Background from '../../components/Background';
import logoImg from '../../assets/logo.png';

import styles from './styles';

const SignIn = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <View style={styles.container}>
        <Image source={logoImg} style={{ marginLeft: "35%" }} />
        <KeyboardAvoidingView>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={login}
              onChangeText={text => setLogin(text)}
              placeholder="Digite seu e-mail de login"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={text => setPassword(text)}
              placeholder="Insira sua senha secreta"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              autoCorrect={false}
            />

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Acessar</Text>
            </RectButton>
          </View>


          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUp}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </Background>
  );
}

export default SignIn;