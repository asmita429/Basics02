import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeScreen, VirtualizedList} from '../../components';

const Home = () => {
  return (
    <SafeScreen>
      <VirtualizedList />
    </SafeScreen>
  );
};

export default Home;

const styles = StyleSheet.create({});
