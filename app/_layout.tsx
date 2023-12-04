import { Image, ThemeProvider } from '@rneui/themed'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Slot, useRouter } from 'expo-router'
import { useEffect } from 'react'
import Loading from '../components/Loading'
import firebaseConfig from '../firebase/config/firebaseConfig'
import {
  FirebaseContextProvider,
  useFirebaseContext,
} from '../firebase/context/FirebaseContextProvider'
import useAuth from '../firebase/hooks/useAuth'

import '../global.css'
import { globalStyles } from '../styles'

export default function _layout() {
  // const { theme } = useTheme();
  return (
    <FirebaseContextProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider>
      <FirebaseWrapper />        
      </ThemeProvider>
    </FirebaseContextProvider>
  )
}

function FirebaseWrapper() {
  const router = useRouter()
  const { app } = useFirebaseContext()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (user) {
      // router.replace("/home/");
      router.replace('/(auth)/(home)/home')
    }
  }, [user])

  if (!app) return <Loading />

  return (
    <>
      {/* Cabeçalho */}
        <View style={globalStyles.headerContainer}>
          <View style={globalStyles.emlinha}>
            <Image
              source={require('../img/icone.png')}
              style={globalStyles.IconeCabecalho}
            />
            <Text style={globalStyles.h1}>EncontreHotel.com</Text>
          </View>
          <Text style={globalStyles.h2a}>
            Os melhores hoteis a preços acessíveis
          </Text>
        </View>
        <Stack>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="register" options={{ title: 'Create Account' }} />
        </Stack>
    </>
  )
}