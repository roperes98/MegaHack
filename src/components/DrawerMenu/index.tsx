import React from 'react';

import { Text } from 'react-native';

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
      </MenuContainer>
    </Container>
  );
};

export default DrawerMenu;