// AboutScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default AboutScreen;
