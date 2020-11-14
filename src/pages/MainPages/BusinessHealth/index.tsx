import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Text } from 'react-native';

import { 
  Container, 
  Header,
  Button,
  PageTitle,
  ScoreCircle, 
  ScoreText, 
  ScoreSubText, 
  LastUpdated,
  LastUpdatedText,
  ScoreInfo,
  ScoreInfoTitle,
  ScoreInfoCards,
  Card
} from './styles';

const BusinessHealth: React.FC = () => {
  return (
    <Container>
      <Header>
        <Button>
        <MaterialIcons 
            name="arrow-back"
            size={32}
            color="#FFA500"
        />
        </Button>
        <PageTitle>Saúde da empresa</PageTitle>
      </Header>
      <ScoreCircle>
        <ScoreText>20.000</ScoreText>
        <ScoreSubText>score</ScoreSubText>
      </ScoreCircle>
      <LastUpdated>
        <Button>
        <MaterialIcons 
            name="replay"
            size={24}
            color="#FFA500"
        />
        </Button>
        <LastUpdatedText>
          Atualizado em: 11/11/2020 às 15h
        </LastUpdatedText>
      </LastUpdated>

      <ScoreInfo>
        <ScoreInfoTitle>Resumo</ScoreInfoTitle>

        <ScoreInfoCards>
          <Card />
        </ScoreInfoCards>
      </ScoreInfo>
    </Container>
  );
};

export default BusinessHealth;
