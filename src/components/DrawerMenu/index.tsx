import React from 'react';

import LargeButton from '../LargeButton';

import { 
  Container,
  MenuContainer,
  ProfileInfo,
  ProfileImage,
  ProfileInfoData,
  ProfileName,
  ProfileEmail,
  MenuRoutes,
} from './styles';

const DrawerMenu: React.FC = () => {
  return (
    <Container>
      <MenuContainer>
        <ProfileInfo>
          <ProfileImage />
          <ProfileInfoData>
            <ProfileName>Nasa</ProfileName>
            <ProfileEmail>contato@nasa.com</ProfileEmail>
          </ProfileInfoData>
        </ProfileInfo>
        <LargeButton>Notificações</LargeButton>
        <LargeButton>Minha Conta</LargeButton>
        <LargeButton>Linker News</LargeButton>
        <LargeButton>Segurança</LargeButton>
        <LargeButton>Me ajuda</LargeButton>
      </MenuContainer>
    </Container>
  );
};

export default DrawerMenu;