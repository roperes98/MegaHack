import React from 'react';

import Bottle from '../../../assets/Bottle.png';

import { 
  Container, 
  BottleImage, 
  MessageSent, 
  MessageSentText, 
  MessageSentDownText,
  SubmitButton,
  SubmitButtonText
} from './styles';

const MessageSend: React.FC = () => {
  return (
    <Container>
      <BottleImage source={Bottle} />
      <MessageSent>Mensagem Enviada</MessageSent>
      <MessageSentText>Agradecemos pela sua contribuição!</MessageSentText>
      <MessageSentDownText>Entraremos em contato o mais rápido possível.</MessageSentDownText>
      <SubmitButton>
          <SubmitButtonText>Okay</SubmitButtonText>
        </SubmitButton>
    </Container>
  );
};

export default MessageSend;
