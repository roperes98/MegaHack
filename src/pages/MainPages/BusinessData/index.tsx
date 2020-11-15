import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { MaterialIcons } from '@expo/vector-icons';

import { Text } from 'react-native';

import { 
  Container, 
  Header, 
  Button, 
  PageTitle, 
  GraphicData,
  BusinessDataSection,
  BusinessDataSectionTitle,
  BusinessDataSectionTitleGroup,
  BusinessDataSectionCards,
  OperatingProfit,
  CardText,
  CardTextValue,
  Card,
  CardsContainer
} from './styles';

const BusinessData: React.FC = () => {
  const data = [50, 10, 50];

  const pieData = data.map((value, index) => ({
    value,
    key: `pie-data-${value}-${index}`,
    svg: {
      fill: '#8257e6'
    },
  }));

  return (
    <Container>
      <Header>
        <PageTitle>Dados da empresa</PageTitle>
        <Button>
          <MaterialIcons 
              name="arrow-forward"
              size={32}
              color="#8257e6"
          />
        </Button>
      </Header>
      <GraphicData>
      <PieChart style={{height: 500}} data={pieData} innerRadius={0} outerRadius={180} padAngle={0} />
      </GraphicData>
      <OperatingProfit>
        Lucro operacional: R$ 8.000,00
      </OperatingProfit>
      <BusinessDataSection>
        <BusinessDataSectionTitleGroup>
        <BusinessDataSectionTitle>Dados</BusinessDataSectionTitle>
        <Button>
          <MaterialIcons 
              name="edit"
              size={28}
              color="#8257e6"
          />
        </Button>
        </BusinessDataSectionTitleGroup>

        <BusinessDataSectionCards>
          <CardsContainer>
            <Card>
              <CardText>Custos de funcionários:</CardText>
              <CardTextValue>R$ 10.000,00</CardTextValue>
            </Card>
            <Card>
              <CardText>Custos de estrutura:</CardText>
              <CardTextValue>R$ 10.000,00</CardTextValue>
            </Card>
          </CardsContainer>
          <CardsContainer>
            <Card>
              <CardText>Custos de Produção:</CardText>
              <CardTextValue>R$ 10.000,00</CardTextValue>
            </Card>
            <Card>
              <CardText>Outras despesas:</CardText>
              <CardTextValue>R$ 10.000,00</CardTextValue>
            </Card>
          </CardsContainer>
        </BusinessDataSectionCards>
      </BusinessDataSection>
    </Container>
  );
};

export default BusinessData;
