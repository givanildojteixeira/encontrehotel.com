import React from 'react'
import {  useGlobalSearchParams } from 'expo-router'
import { View } from 'react-native'
import { Icon, Text } from '@rneui/base'
import { globalStyles } from '../../../styles'
import * as utils from '../../../utils'

export default function details() {
  const {id,nomeHotel,nroEestrelas,localizacao,pontoVista,observacao,tipoQuarto,
    cancela,valor,opcionais,} = useGlobalSearchParams()
  console.log(nomeHotel);

  return (
    <View style={globalStyles.item}>
      <View style={globalStyles.subitem}>
        <Text style={globalStyles.h2}>{nomeHotel}</Text>
        <utils.Estrelas quantidade={nroEestrelas} />
      </View>
      <View style={globalStyles.separator} />

      <View style={globalStyles.productContainerDetail}>
        <View style={globalStyles.columnDetail}>
          <Text style={globalStyles.dValorDetails}>
            {utils.formatarPreco(valor)}
          </Text>
          <View style={globalStyles.deschotel}>
          <Icon type="ionicon" name="location" size={20} color="#979595"/>
            <Text style={globalStyles.h3}>{localizacao}</Text>
          </View>
          <View style={globalStyles.deschotel}>
            <Icon type="ionicon" name="walk" size={20} color="#979595" />
            <Text style={globalStyles.h3}>{pontoVista}</Text>
          </View>
          <Text style={globalStyles.h3}>{observacao}</Text>
          <View style={globalStyles.separator} />
          <Text style={globalStyles.h3}>Quarto:{tipoQuarto}</Text>
          <Text style={globalStyles.h3}>Adicionais:</Text>
          <Text style={globalStyles.h3}>{opcionais}</Text>
        </View>
        <View style={globalStyles.columnDetail}>
          <Text style={globalStyles.h3a}>
            {utils.isCancelamentoGratis(cancela)}
          </Text>
          <Text style={globalStyles.h4}>**1 Diária +impostos</Text>
        </View>
      </View>
    </View>
  )
}
