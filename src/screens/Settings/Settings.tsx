import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {SafeScreen} from '../../components';

const Settings = ({navigation}) => {
  const route = useRoute();
  const {container, pressableStyle} = styles;
  //destructuring
  const {body} = route.params;
  // console.log('inside route => ', route);

  return (
    <SafeScreen>
      <Text>{body}</Text>
      <TouchableOpacity
        style={pressableStyle}
        onPress={() => navigation.navigate('Profile')}>
        <Text>GO to Myprofile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={pressableStyle}
        onPress={() => navigation.goBack()}>
        <Text>GO Back</Text>
      </TouchableOpacity>
    </SafeScreen>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableStyle: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
});
