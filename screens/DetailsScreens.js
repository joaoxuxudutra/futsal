// DetailsScreen.js
import React from 'react';
import styles from '../screens/style'
import imagem from '../img/imagemSobre.png'
import { View, Text, Button, Pressable, StyleSheet, Image } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.background}>
      
    <View style={styles.content}>
      <Text style={styles.title}>Sobre</Text>

     <Image source={imagem} style={styles.imagemSobre}/>

     <View>
        <View>
          <Text style={styles.texto}>João Vitor Dutra Macedo</Text>
          <Text style={styles.texto}>RG: 00000000</Text>
          <Text style={styles.texto}>Tel: (18) 99120-7281</Text>
          <Text style={styles.texto}>RM: 7748</Text>
        </View>
      </View>
        
      </View>
    </View>
    </View>
  );
}

export default DetailsScreen;
