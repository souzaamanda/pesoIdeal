import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CalculoScreen from '../screens/CalculoScreen'
import MagrezaScreen from '../screens/MagrezaScreen'
import SaudavelScreen from '../screens/SaudavelScreen'
import SobrepesoScreen from '../screens/SobrepesoScreen'
import ObesidadeScreen from '../screens/ObesidadeScreen'

const Stack = createNativeStackNavigator()

export default props => {

  return (
    <Stack.Navigator initialRouteName='ResultadoScreen' >

      <Stack.Screen name= 'CalculoScreen'
                    component={CalculoScreen}
                    options={{ headerShown: false }}
      />

      <Stack.Screen name= 'MagrezaScreen'
                    component={MagrezaScreen}
                    options={{ headerShown: false }}
      />

      <Stack.Screen name= 'SaudavelScreen'
                    component={SaudavelScreen}
                    options={{ headerShown: false }}
      />

      <Stack.Screen name= 'SobrepesoScreen'
                    component={SobrepesoScreen}
                    options={{ headerShown: false }}
      />

      <Stack.Screen name= 'ObesidadeScreen'
                    component={ObesidadeScreen}
                    options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}