import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Switch } from 'react-native';

import Dog from '../../../assets/Security.png';

import { 
  Wrapper, 
  Header,
  Button,
  PageTitle,
  DogImage,
  FingerprintGroup,
  FingerprintText
} from './styles';

const AppSecurity: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Button>
          <MaterialIcons 
              name="menu"
              size={32}
              color="#8257e6"
          />
        </Button>
        <PageTitle>Segurança</PageTitle>
      </Header>

      <DogImage source={Dog} />

      <FingerprintGroup>
          <FingerprintText>Desbloquear com digital</FingerprintText>
          <Switch trackColor={{ false: "#c4c4c4", true: "#c4c4c4" }} />
        </FingerprintGroup>
    </Wrapper>
  );
};

export default AppSecurity;
