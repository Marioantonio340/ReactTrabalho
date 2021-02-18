import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';


class Imagem extends Component {
    render (){
      let imagem = 'https://i.pinimg.com/originals/b7/bd/ae/b7bdaece9e3b564f84fb0d7b73a44410.jpg'

      return(
        <View style={styles.container}>
        <Image 
        source={{uri:imagem}}
        style={{width: this.props.largura , height: this.props.altura }}
         />
          <Text>{this.props.nomeImagem}</Text>
         </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container:{
      margin: 30,
      justifyContent:'center',
      alignItems:'center'
    }
  })


  export default Imagem;