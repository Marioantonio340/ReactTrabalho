import React, { Component } from 'react';
import { View, Button } from 'react-native';


class Botao extends Component{render(){return(<View style={{width:500}}><Button onPress={()=>Alert.alert('Acessar')}title="Entrar" color= "#0000FF"/></View>)}}

export default Botao;nb