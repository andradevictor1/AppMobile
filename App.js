/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import firebase from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
 
 
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

state = {
  email: '',
  password: '',

}

login = async () =>{
  const {email, password} = this.state;
  
try {
  const user = await firebase.auth().sigInWithEmailAndPassword(email,password);
  this.ListeningStateChangedEvent({isAuthenticated: true});
  console.log(user);

} catch (error) {
  console.log(error);
}


}

  return (
    <>
  
             
           <KeyboardAvoidingView style ={styles.background}>   
            <View style ={styles.logo}>
            <Image source = {require('./src/assets/taxi.png')}/>
            </View>
           <View style = {styles.container}> 
             <TextInput style = {styles.input}
             placeholder= "Email"
             autoCorrect = {false}
             onChangeText= {() => {}}
             value={this.StaticRange.email}
             onChangeText = {email => this.ListeningStateChangedEvent({email})}
             />
              <TextInput style = {styles.input}
             placeholder= "Senha"
             autoCorrect = {false}
             onChangeText= {() => {}}
             value={this.StaticRange.password}
             onChangeText = {password => this.ListeningStateChangedEvent({password})}
             />

             <TouchableOpacity style = {styles.btn} onPress = {this.login}>

             <Text style = {styles.btntxt}>Acessar Sistema</Text>  
             </TouchableOpacity >
             <TouchableOpacity style = {styles.btnRegister}>

             <Text style = {styles.registertxt}>Criar Conta</Text>  
             </TouchableOpacity>
             {this.state.isAuthenticated ? <Text> Logado com sucesso!</Text>: ''}
           </View>
           </KeyboardAvoidingView>
          
     
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
 container:{
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   width: '90%',
   paddingBottom: 50,
   
 },
 input:{
   backgroundColor: '#FFF',
   width: '90%',
   marginBottom: 15,
   color: '#222',
   fontSize: 17,
   borderRadius: 7,
   padding: 10,
 },
 btn:{
  backgroundColor: '#35AAFF',
   width: '90%',
   height: 45,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 7,
  
 },
 btntxt:{
   color: '#FFF',
   fontSize: 18,

 },
 btnRegister:{
   marginTop: 10,


 },

 registertxt:{
  color: '#FFF',
  fontSize: 17,

 },
 logo:{
   flex: 1,
   justifyContent: 'center',
   
   
 }
 
});

export default App;
