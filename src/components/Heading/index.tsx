import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Header, Button, PageTitle } from './styles';

const Heading: React.FC = ({children}) => {
  return (
    <>
      <Header>
        <Button>
          <MaterialIcons 
              name="menu"
              size={32}
              color="#8257e6"
          />
          </Button>
          <PageTitle>{children}</PageTitle>
      </Header>
    </>
  );
};

export default Heading;
