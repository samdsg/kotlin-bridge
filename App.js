import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Alt from './kotlin';

const App = () => {
  
  useEffect(() => {
    Alt.trigger();
  }, []);

  return (
    <>
      <View>
        <Text>Welcome</Text>
      </View>
    </>
  );
};

export default App;
