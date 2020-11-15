import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Switch } from 'react-native';

import LargeButton from '../../../components/LargeButton';
import Dog from '../../../assets/Security.png';

import { 
  Wrapper, 
  Header,
  Button,
  PageTitle,
  DogImage,
  FingerprintGroup,
  FingerprintText,
  ExitInAllDevices,
  ExitInAllDevicesText
} from './styles';
import Heading from '../../../components/Heading';

const AppSecurity: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Segurança</Heading>

      <DogImage source={Dog} />

      <FingerprintGroup>
        <FingerprintText>Desbloquear com digital</FingerprintText>
        <Switch trackColor={{ false: "#c4c4c4", true: "#c4c4c4" }} />
      </FingerprintGroup>

      <LargeButton>Verificação em duas etapas</LargeButton>
      <LargeButton>Token de verificação</LargeButton>

      <ExitInAllDevices>
        <ExitInAllDevicesText>SAIR DE TODOS OS DISPOSITIVOS</ExitInAllDevicesText>
      </ExitInAllDevices>
    </Wrapper>
  );
};

export default AppSecurity;
