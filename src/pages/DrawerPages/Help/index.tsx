import React from 'react';
import Heading from '../../../components/Heading';

import { Wrapper, HelpText, HelpBox, HelpUserText, SubmitButton, SubmitButtonText } from './styles';

const Help: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Me ajuda</Heading>
      <HelpBox>
        <HelpText>Envie a sua pergunta ou sugestão e a nossa equipe irá responder o mais rápido possível!</HelpText>
        <HelpUserText multiline={true} underlineColorAndroid="transparent" />
        <SubmitButton>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </HelpBox>
    </Wrapper>
  );
};

export default Help;
