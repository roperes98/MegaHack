import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

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
  Card,
  MainInfo,
  InfoName
} from './styles';
import LargeButton from '../../../components/LargeButton';

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
          <Card>
            <MainInfo>R$ 200,00</MainInfo>
            <InfoName>Faturamento mensal</InfoName>
          </Card>
          <Card>
            <MainInfo>R$ 200,00</MainInfo>
            <InfoName>Ticket médio</InfoName>
          </Card>
          <Card>
            <MainInfo>R$ 100,00</MainInfo>
            <InfoName>Índice de endividamento</InfoName>
          </Card>
          <Card>
            <MainInfo>R$ 100,00</MainInfo>
            <InfoName>Ponto de equilíbrio</InfoName>
          </Card>
        </ScoreInfoCards>
      </ScoreInfo>
    </Container>
  );
};

export default BusinessHealth;
