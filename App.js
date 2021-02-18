import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Imagem from './src/components/Imagem';
import BemVindo from './src/components/BemVindo';

class App extends Component{
  render(){
    let nome = 'Mario Fernandes';

    return(
      <View style={styles.container}>
        <BemVindo/>
        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit {nome}</Text>
        <Imagem largura ={500} altura={500} nomeImagem='Clique aqui para acessar'/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
