import React from 'react';
import { Text, View } from 'react-native';
import JobInputText from '../components/form/JobInputText.tsx';
import {style} from './style.ts';

const Form = () => {
  return (
    <View>
        <Text style={style.container}>Form Login</Text>
        <JobInputText />
    </View>
  );
};

export default Form;

