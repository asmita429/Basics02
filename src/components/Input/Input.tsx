import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
interface IProps {
  onChangeText: (text: string) => void;
  value: string;
}
const FormInput = ({onChangeText, value, ...props}) => {
  console.log('check the text => ', value);

  return (
    <View>
      <TextInput value="value" onChangeText={onChangeText} {...props} />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
