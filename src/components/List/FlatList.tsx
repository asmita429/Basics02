import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BASE_URL} from '../../constants/strings';
import {useNavigation} from '@react-navigation/native';

interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const VirtualizedList = () => {
  const navigation = useNavigation();
  const {container, pressableStyle} = styles;
  const [comments, setComments] = useState<IComments>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(BASE_URL)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.log(err));
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={comments}
        scrollEventThrottle={16}
        keyExtractor={(item, index) =>
          item.id.toString() + Math.random() + index
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={pressableStyle}
              key={item.id}
              onPress={() => navigation.navigate('Settings', item)}>
              <Text>{item.body}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default VirtualizedList;

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
