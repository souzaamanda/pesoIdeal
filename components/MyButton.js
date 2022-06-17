import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Colors, Metrics, Fonts } from '../values'

export default props => {
  const { style, title, ...rest } = props
  return(
    <TouchableOpacity style={ [Estilo.button, style] }
                      { ...rest }> 
      <Text style={ Estilo.text }> 
        { title }
      </Text>
    </TouchableOpacity>
  )
}

const Estilo = StyleSheet.create(
  {
    button: {
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Metrics.radius.base,
      backgroundColor: Colors.white,
      borderRadius: 20,
      borderWidth: 0
    },
    text: {
      fontSize: Fonts.buttonText,
      color: Colors.primary,
      fontWeight: 'bold'
    }
  }
)