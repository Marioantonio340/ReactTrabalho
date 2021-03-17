import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      positionPhrase: 0,

      phrase:
      [
        {frase:"clique para gerar uma frase", imagem:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47308/closed-book-emoji-clipart-md.png"},
        {frase:"O incentivo ao avanço tecnológico, assim como a hegemonia do ambiente político obstaculiza a apreciação da importância dos relacionamentos verticais entre as hierarquias.", imagem:"https://images.vexels.com/media/users/3/205447/isolated/preview/b005d137a9e6157601c77619c2c916ac-livro-escolar-vermelho-aberto-by-vexels.png"},
        {frase:"No mundo atual, o desafiador cenário globalizado faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência.", imagem:"https://images.vexels.com/media/users/3/205447/isolated/preview/b005d137a9e6157601c77619c2c916ac-livro-escolar-vermelho-aberto-by-vexels.png"},
        {frase:"No entanto, não podemos esquecer que o desafiador cenário globalizado apresenta tendências no sentido de aprovar a manutenção dos conhecimentos estratégicos para atingir a excelência.", imagem:"https://images.vexels.com/media/users/3/205447/isolated/preview/b005d137a9e6157601c77619c2c916ac-livro-escolar-vermelho-aberto-by-vexels.png"},
        {frase:"Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o surgimento do comércio virtual causa impacto indireto na reavaliação dos paradigmas corporativos.", imagem:"https://images.vexels.com/media/users/3/205447/isolated/preview/b005d137a9e6157601c77619c2c916ac-livro-escolar-vermelho-aberto-by-vexels.png"},
        {frase:"Assim mesmo, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos.", imagem:"https://images.vexels.com/media/users/3/205447/isolated/preview/b005d137a9e6157601c77619c2c916ac-livro-escolar-vermelho-aberto-by-vexels.png"},
      ]
      
    }
    this.getPrashe = this.getPrashe.bind(this)
  }
  getPrashe(){
    console.log(this.state.positionPhrase)
     this.setState({
      positionPhrase: Math.floor(Math.random()* (this.state.phrase.length - 1))+1
      
    }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
        source={{uri:this.state.phrase[this.state.positionPhrase].imagem}}
         style={{
           width:400,
         height:400
        }}
          />
        <Text style={styles.text}>{this.state.phrase[this.state.positionPhrase].frase}</Text>

        <TouchableHighlight style={styles.button} onPress={()=> this.getPrashe()}>
          <Text style={[styles.textButton]}>Gerar Frase</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent:"center"
  },
  text:{
    marginTop: 3,
    marginBottom: 15,
    fontSize: 25,
    textAlign:"center",
    fontSize: 25,
    maxWidth:300,
    color:"black"
  },
  button:{
    backgroundColor:"#FFF",
    borderColor:"red",
    width: 300,
    borderWidth:3,
    borderRadius: 15
  },
  textButton:{
    justifyContent:"center",
    textAlign:"center",
    padding:10,
    color:"red"
  }

});

export default App;