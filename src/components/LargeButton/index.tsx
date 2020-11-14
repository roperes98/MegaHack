import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { Text } from 'react-native';

import { Container, ButtonText } from './styles';

const LargeButton: React.FC = () => {
  return (
    <>
      <Container onPress={() => {}}>
        <ButtonText>Transações</ButtonText>

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
