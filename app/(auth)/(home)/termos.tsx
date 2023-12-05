import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles';

export default function TermosDeUso() {
  const [concordou, setConcordou] = useState(false);

  const handleConcordar = () => {
    setConcordou(true);
    // Você pode adicionar lógica adicional aqui, como salvar o status de concordância em algum lugar.
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.h1}>Termos de Uso</Text>
      <View style={globalStyles.separator} />

      <Text style={globalStyles.h3}>
      Bem-vindo ao nosso aplicativo de reservas de hotel. Ao efetuar uma reserva conosco, 
      você concorda com os seguintes termos:
      </Text>
      
        <Text style={globalStyles.h2subtitulo}>Reserva e Pagamento:</Text>
        <Text style={globalStyles.h2texto}>
          Ao realizar uma reserva, você concorda em fornecer informações precisas e completas sobre os hóspedes e efetuar o pagamento conforme as políticas estabelecidas.
        </Text>

        <Text style={globalStyles.h2subtitulo}>Cancelamento e Reembolso:</Text>
        <Text style={globalStyles.h2texto}>
          Compreende que as políticas de cancelamento e reembolso variam entre os estabelecimentos e concorda em respeitar e seguir as condições específicas apresentadas durante o processo de reserva.
        </Text>

        <Text style={globalStyles.h2subtitulo}>Comportamento do Hóspede:</Text>
        <Text style={globalStyles.h2texto}>
          Compromete-se a seguir as regras e regulamentos estabelecidos pela propriedade durante a estadia. Compreende que o não cumprimento dessas normas pode resultar em penalidades ou cancelamento da reserva.
        </Text>

        <Text style={globalStyles.h2subtitulo}>Comunicação:</Text>
        <Text style={globalStyles.h2texto}>
          Autoriza o envio de comunicações relacionadas à sua reserva, incluindo confirmações, lembretes e atualizações importantes.
        </Text>

        <Text style={globalStyles.h2subtitulo}>Privacidade:</Text>
        <Text style={globalStyles.h2texto}>
          Compreende e aceita nossa política de privacidade, que descreve como suas informações pessoais são coletadas, usadas e protegidas.
        </Text>
        <Text style={globalStyles.h2subtitulo}></Text>
        <View style={globalStyles.separator} />
        
        <Text style={globalStyles.h2texto}>

        Ao clicar no botão de reserva, você confirma que leu, 
        compreendeu e concorda com estes Termos de Uso. 
        Recomendamos que revise cuidadosamente todas as informações 
        apresentadas durante o processo de reserva.
        </Text>
        <Text style={globalStyles.h2subtitulo}></Text>

        <Text style={globalStyles.h2texto}>
        Obrigado por escolher nosso serviço de reservas. Tenha uma estadia agradável!
        </Text >
        <Text style={globalStyles.h2subtitulo}></Text>
        <Text style={globalStyles.h2subtitulo}></Text>


{/* 
      {!concordou && (
        <TouchableOpacity onPress={handleConcordar} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Concordar</Text>
        </TouchableOpacity>
      )} */}
    </ScrollView>
  );
}
