import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Listagem({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {data.nome} </Text>
      <Text style={styles.text}>Cargo: {data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        container: {
            flex:1,
            marginTop:10,
            marginBottom:10,
            padding:10,
            backgroundColor:'#9BCC9', 
        },
        text:{
            color:'#222',
            fontSize:17,
        }
})