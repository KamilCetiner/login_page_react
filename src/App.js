import React from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';


const LoginPage = () => {
  return(
    

    <View style={styles.container}>
      
      <KeyboardAvoidingView
       style={{ flex: 1 , alignItems: 'stretch'}}
       keyboardVerticalOffset={-85}
       behavior="position">
      <View>
      <Image
       
        source={require('./img/wagen.jpeg')} style={{width:200, height:200, resizeMode: 'contain', alignSelf:'center', marginTop: 20,}}/>
      </View>
      <View style={styles.Input_mail}>
        <TextInput
        underlineColorAndroid= 'white'
        keyboardType= 'email-address'
        placeholder ='E-posta giriniz..'
        style={{paddingTop:15, fontSize:15}} />
        
      </View>
      <View style={styles.Input_pass}>
      <TextInput
      underlineColorAndroid="white"    
      placeholder= 'Şıfre Giriniz...'
      style={{paddingTop:15, fontSize:15}} />

      </View>
      <View>
        <TouchableOpacity style={styles.button_1}>
          <Text style={styles.button_text_1}>Giriş Yap </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_2}>
          <Text style={styles.button_text_2}>Kayıt Ol </Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
    
  );
};

export default LoginPage;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#80CBC4',
    height:620,
  }, 
  Input_mail:{
    width:300,
    height:45,
    
    alignSelf:'center',
    backgroundColor: 'white',
    marginBottom:20,
    borderWidth: 0,
    borderRadius: 5,

  },
  Input_pass:{
    width:300,
    height:45,
    alignSelf:'center',
    backgroundColor: 'white',
    marginBottom: 15,
    borderWidth: 0,
    borderRadius: 5,

    
  },
  button_1:{
    backgroundColor: '#546E7A',
    width:200,
    height:50,
    marginBottom:10,
    alignSelf: 'center',
    borderRadius: 5,

  },
  button_2:{
    backgroundColor: '#546E7A',
    width:200,
    height:50,
    alignSelf:'center',
    borderRadius: 5,
  },
  button_text_1:{
    color:'white',
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
  },
  button_text_2:{
    color: 'white',
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
    
  },

});



