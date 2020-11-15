import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, ButtonText } from './styles';

const LargeButton: React.FC = ({children}) => {
  return (
    <>
      <Container onPress={() => {}}>
        <ButtonText>{children}</ButtonText>

        <MaterialIcons 
            name="arrow-forward"
            size={23}
            color="#fff"
        />
      </Container>
    </>
  );
};

export default LargeButton;
