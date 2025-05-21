import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import {style} from './styles.ts';

const JobInputText = () => {
    const [email, setEmail] = useState('');

    const setInputText = (emailValue: string) => {
        setEmail(emailValue);
        console.log('email:', emailValue);
    };

    const clearInputText = () => {
        setEmail('');
        console.log('clearInputText');
    };

  return (
      <View style={style.container}>
          <View style={style.inputContainer}>
              {email && (
                  <Text style={style.label}>Correo electrónico</Text>
              )}
              <TextInput
                  autoCapitalize="none"
                  style={[
                      style.textInput,
                      { paddingTop: email ? 25 : 10 },
                  ]}
                  placeholder="Escribe tu correo electrónico"
                  placeholderTextColor="#7876B1"
                  value={email}
                  onChangeText={(text) => setInputText(text)}
              />
              {email && (
                  <Text style={style.icon} onPress={clearInputText}>X icon</Text>
              )}
          </View>
      </View>
  );
};

export default JobInputText;
