import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import { Colors, Metrics } from '../values'

import { MyButton } from '../components'

export default props => {

  //console.log(props.route.params)

  return(
    <ImageBackground style={Estilo.imagemFundo} source = { require('../assets/fundo2.png')}>
      <View style={ Estilo.container }> 

        <View>
          <Text style={Estilo.imc}> {props.route.params.resultado} </Text>
        </View>

        <View style={Estilo.containerTitulo}>

          <Text style={Estilo.titulo}> Resultado: </Text>

          <View style={Estilo.containerResultado}>
            <Text style={Estilo.resultadoTexto}> Sobrepeso </Text>
          </View>
         
          <Text style={Estilo.titulo}> Imformações: </Text>

          <View style={Estilo.containerInfo}>            
            <Text style={Estilo.info}>
             Fadiga, má circulação, varizes.
            </Text>
          </View>

        </View>

          <MyButton title='Voltar'
                    style={ Estilo.formItem }
                    onPress={ () => props.navigation.navigate('CalculoScreen')}
                    />

      </View>
    </ImageBackground>
  )
}

const Estilo = StyleSheet.create(
  {
    container: {
      flexGrow: 1,
      padding: Metrics.padding.base,
      justifyContent: 'center'
    },
    imc:{
      fontWeight: "bold",
      fontSize: 80,
      textAlign: 'center',
      color: Colors.white,
      textShadowColor: Colors.dark,
      textShadowOffset: {width: 4, height: 4},
      textShadowRadius: 10
    },
    containerTitulo:{
      padding: Metrics.padding.base 
    },
    titulo: {
      fontWeight: "bold",
      fontSize: 16,
      paddingTop: Metrics.padding.base,
      paddingBottom: Metrics.padding.small
    },
    containerResultado:{
      width:'100%',
      height: 60,
      backgroundColor: Colors.gray,
      alignItems:'center',
      borderRadius: 8,
    },
    resultadoTexto:{
      justifyContent: 'center',
      color: Colors.primary,
      fontWeight:' bolder',
      fontSize: 30
    },
    containerInfo:{
      width:'100%',
      height: 140,
      backgroundColor: Colors.gray,
      borderRadius: 8,
    },
    info: {
      padding: Metrics.padding.small,
      fontSize: 14,
      color: Colors.text
    },
    imagemFundo:{
      flex: 1,
      resizeMode: 'cover',
      width: '100%'
    },
    
  }
)