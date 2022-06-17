import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import { Colors, Metrics } from '../values'

import { MyButton, MyTextInput } from '../components'


export default props => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function calcularIMC (){

    if(peso == ''){
      alert('Preencha seu peso (Kg)')
      return
    } else if(altura == ''){
      alert('Preencha sua altura (cm)')
      return
    }

    
    const resultado = (peso / ((altura/100) * (altura/100))).toFixed(1)
      //console.log(resultado)

      if (resultado < 18.5){
      //Magreza
      props.navigation.reset(
        {
          index: 0,
          routes: [{name: 'MagrezaScreen',
                    params: {resultado: resultado}}]
        }
      )

      }else if (resultado >= 18.5 && resultado <= 24.9){
      //Saudável
      props.navigation.reset(
        {
          index: 0,
          routes: [{name: 'SaudavelScreen',
                    params: {resultado: resultado}}]
        }
      )

      }else if (resultado >= 25 && resultado <= 29.9){
      //Sobrepeso
      props.navigation.reset(
        {
          index: 0,
          routes: [{name: 'SobrepesoScreen',
                    params: {resultado: resultado}}]
        }
      )

      }else {
      //Obesidade
      props.navigation.reset(
        {
          index: 0,
          routes: [{name: 'ObesidadeScreen',
                    params: {resultado: resultado}}]
        }
      )
    }
  }

  return(
  <ImageBackground style={Estilo.imagemFundo} source = { require('../assets/fundo1.png')}>
    <View style={ Estilo.container}>
    
      <View style={Estilo.containerTitulo}>
        <Text style={Estilo.titulo}> Seja bem vindo! </Text> 
        <Text style={Estilo.subtitulo}> Calcule seu IMC </Text> 
      </View>

      <View>
        <MyTextInput placeholder='Digite seu peso em quilos'
                     value={ peso }
                     keyboardType='numeric'
                     style={ Estilo.formItem }
                     onChangeText={ char => setPeso(char) } 
                     />

        <MyTextInput placeholder='Digite sua altura em centimetros'
                     value={ altura }
                     keyboardType='numeric'
                     style={ Estilo.formItem } 
                     onChangeText={ char => setAltura(char) }
                     />

        <MyButton title='Calcular'
                  style={ Estilo.formItem }
                  onPress={calcularIMC}
                  />
      </View>
    </View>
  </ImageBackground> 
  )
}

const Estilo = StyleSheet.create(
  {
    container: {
      flexGrow: 1,
      padding: Metrics.padding.base,
      justifyContent: 'center',
    },
    containerTitulo:{
      padding: Metrics.padding.base,
     
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 44,
      textAlign: 'center',
      color: Colors.white,
      textShadowColor: Colors.dark,
      textShadowOffset: {width: -2, height: 2},
      textShadowRadius: 10
    },
    subtitulo:{
      fontSize: 22,
      textAlign: 'center',
      color: Colors.white,
      textShadowColor: Colors.dark,
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    formItem: {
      marginBottom: Metrics.margin.base,
    },
    imagemFundo:{
      flex: 1,
      resizeMode: 'cover',
      width: '100%'
    }
  }
)