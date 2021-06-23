import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ActivityIndicator
} from 'react-native';
import firebase from './src//Connection/FirebaseConnection';
import Listagem from './src/components/Listagem';

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser ] = useState('');

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((value) => {
      alert('Usuário Criado:'+ value.user.email);
    })
    .catch((error) =>{
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres');
        return;
      }
      if (error.code === 'auth/invalid-email'){
        alert('E-mail inválido');
        return;

      }else{
        alert('Algo deu errado! :(');
        return;

      }
    } )
  }


  async function logar(){
  
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then((value) => {
      navigation.navigate('Details')
      alert('Bem Vindo!! :'+ value.user.email);
      setUser(value.user.email);
    })
    .catch((error) =>{
   
        alert('Algo deu errado! :(');
        return;
    } )
    setEmail('');
    setPassword('');

  }

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={styles.texto} >E-mail:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setEmail(texto)}
      value={email}
      />
       <Text style = {styles.texto} >Password:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setPassword(texto)}
      value={password}
      />
      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />
      <Button
        title="Entrar"
        onPress={logar}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10
  },
  texto: {
    fontSize:20,
  },
  input: {
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor:'#121212',
    height:45,
    fontSize:17
  }
});

function DetailsScreen({ navigation }) {
  const [setup, setSetups ] = useState('');
  const [processador, setProcessador] = useState('');
  const [placaMae, setPlacaMae] = useState('');
  const [memoriaRAM, setMemoriaRam] = useState('');
  const [HD, setHD] = useState('');
  const [placaVideo, setPlacaVideo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function dados() {


      await firebase.database().ref('setup').on('value', (snapshot)=>{
        setSetups([]);
        snapshot.forEach((childItem)=>{
          let data = {
            key:childItem.key,
            processador:childItem.val().processador,
            placaMae:childItem.val().placaMae,
            memoriaRAM:childItem.val().memoriaRAM,
            HD:childItem.val().HD,
            placaVideo:childItem.val().placaVideo,
          };
          setSetups(oldArray => [...oldArray, data].reverse());
        })
        setLoading(false)
      })


    }
    dados();
  }, []);
  async function NovoSetup() {
    if (processador !== '' & placaMae !== '' & memoriaRAM !== '' & HD !== '' & placaVideo !== '') {
      let setup = await firebase.database().ref('setup');
      let chave = setup.push().key;

      setup.child(chave).set({
        processador:processador,
        placaMae:placaMae,
        memoriaRAM:memoriaRAM,
        HD:HD,
        placaVideo:placaVideo,
      });
      alert('Setup cadastrado com sucesso!');
    }

  }

  async function logout(){
    await firebase.auth().signOut();
    setUser('');
    navigation.navigate('Home')
    alert('Deslogado com sucesso!')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button
        title="Sair"
        onPress={logout}
      />
      <Text style={styles.texto} >Processador:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setProcessador(texto)}
      />
       <Text style = {styles.texto} >Placa Mãe:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setPlacaMae(texto)}
      />
       <Text style = {styles.texto} >Memória RAM:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setMemoriaRam(texto)}
      />
       <Text style = {styles.texto} >HD:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setHD(texto)}
      />
       <Text style = {styles.texto} >Placa de Vídeo:</Text>
      <TextInput style={styles.input}
      underlineColorAndroid = "transparent"
      onChangeText={(texto)=>setPlacaVideo(texto)}
      />
      
      <Button
        title="Novo Cadastro"
        onPress={NovoSetup}
      />

      {loading?
      (
      <ActivityIndicator color="#121212" size={45}/>
      ):
      (
        <FlatList
        keyExtractor={item => item.key}
        data={setup}
        renderItem={({item})=>(<Listagem data={item}/>)}
      />
      )

      }
     
    </View>
  );
}



const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
