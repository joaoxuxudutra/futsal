import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import {tela} from '../img/tela.png'

const HomeScreen = ({ navigation }) => {

  return (
    <View>

    <Image
        source={tela} style={{ widht:'100%', height:'100%' }}
        />
      
      <View>
      <Pressable
        title="voltar"
        onPress={() => navigation.navigate('About')}
      />

      </View>   
    </View>
    
  );
}

export default HomeScreen;
