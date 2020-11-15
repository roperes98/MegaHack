import React from 'react';

import { LineChart, Grid } from 'react-native-svg-charts';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import LargeButton from '../../../components/LargeButton';

import { 
  Wrapper, 
  Menu,
  Heading, 
  OverviewInfo, 
  OverviewInfoTitle, 
  MoneyTotal, 
  MoneyReturn,
  BankingFunctions
} from './styles';

const Overview: React.FC = () => {

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  return (
    <Wrapper>
      <Heading>
        <Menu>
          <MaterialIcons 
              name="account-circle"
              size={35}
              color="#fff"
          />
        </Menu>

        <Menu>
        <MaterialCommunityIcons 
            name="account-convert"
            size={35}
            color="#fff"
        />
        </Menu>
      </Heading>

      <OverviewInfo>
        <OverviewInfoTitle>VISÃO GERAL</OverviewInfoTitle>
        <MoneyTotal>R$ 20.000,00</MoneyTotal>
        <MoneyReturn>reserva: R$ 200,00</MoneyReturn>
        <LineChart
          style={{ height: 280, width: 387 }}
          data={data}
          svg={{ stroke: 'rgb(238, 46, 93)', strokeWidth: 2.3 }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </OverviewInfo>

      <BankingFunctions>
        <LargeButton>Saldo</LargeButton>
        <LargeButton>Pagar conta</LargeButton>
        <LargeButton>Cartão</LargeButton>
        <LargeButton>Transferir</LargeButton>
        <LargeButton>Depositar</LargeButton>
        <LargeButton>Crédito</LargeButton>
      </BankingFunctions>
    </Wrapper>
  );
};

export default Overview;
