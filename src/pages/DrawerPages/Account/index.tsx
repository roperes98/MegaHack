import React from 'react';
import { Feather } from '@expo/vector-icons';
import Votorantim from '../../../assets/Votorantim.jpg';

import Heading from '../../../components/Heading';
import LargeButton from '../../../components/LargeButton';

import { 
  Wrapper, 
  Banking,
  SectionTitle,
  AccountInfoContainer,
  AccountInfo,
  MainInfo,
  InfoName,
  CopyButton
} from './styles';
import { Image } from 'react-native';

const Account: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Conta</Heading>
      <SectionTitle>Minha Conta</SectionTitle>
      <AccountInfoContainer>
        <Banking>
          <Image source={Votorantim} style={{ borderRadius: 25, marginRight: 8 }} />
          <AccountInfo>
            <MainInfo>Votorantim</MainInfo>
            <InfoName>Banco</InfoName>
          </AccountInfo>
        </Banking>
        <AccountInfo style={{ alignItems: 'flex-end' }}>
          <MainInfo>655</MainInfo>
          <InfoName>Código</InfoName>
        </AccountInfo>
      </AccountInfoContainer>

      <AccountInfoContainer>
        <AccountInfo>
          <MainInfo>0001-0</MainInfo>
          <InfoName>Agência</InfoName>
        </AccountInfo>
        <CopyButton>
          <Feather 
                name="copy"
                size={28}
                color="#EDEDED"
            />
        </CopyButton>
      </AccountInfoContainer>

      <AccountInfoContainer>
        <AccountInfo>
          <MainInfo>00001-0</MainInfo>
          <InfoName>Conta e dígito</InfoName>
        </AccountInfo>
        <CopyButton>
          <Feather 
                name="copy"
                size={28}
                color="#EDEDED"
            />
        </CopyButton>
      </AccountInfoContainer>

      <AccountInfoContainer>
        <AccountInfo>
          <MainInfo>Conta Corrente</MainInfo>
          <InfoName>Tipo da conta</InfoName>
        </AccountInfo>
        <CopyButton>
          <Feather 
                name="copy"
                size={28}
                color="#EDEDED"
            />
        </CopyButton>
      </AccountInfoContainer>

      <SectionTitle>Editar</SectionTitle>
      <LargeButton>TROCAR E-MAIL</LargeButton>
      <LargeButton>TROCAR SENHA</LargeButton>
      <LargeButton>DADOS CADASTRAIS</LargeButton>
      <LargeButton>MEU PLANO</LargeButton>

      <SectionTitle>Outros</SectionTitle>
      <LargeButton>EXCLUIR CONTA</LargeButton>
      <LargeButton>TERMOS</LargeButton>
    </Wrapper>
  );
};

export default Account;
