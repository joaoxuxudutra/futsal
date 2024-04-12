// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  );
}

export default DetailsScreen;
