import React from 'react';
import styles from '../screens/style'
import { View, Text, Button, Image, Pressable, StyleSheet } from 'react-native';
import tela from '../img/tela.png'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.content}>
    <Image
        source={tela} style={styles.imagem}
        />
      
      <View>
      <Pressable
        title=""
        onPress={() => navigation.navigate('About')}
      />

      </View>   
    </View>
    
  );
}

export default HomeScreen;
