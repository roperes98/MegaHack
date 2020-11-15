import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';

import { LineChart, Grid } from 'react-native-svg-charts';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import LargeButton from '../../../components/LargeButton';
import DrawerMenu from '../../../components/DrawerMenu';

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

class Overview extends Component {
  state = {
    leftOpen: false,
  }

  toggleMenu = (position, isOpen) => {
    this.setState({ [`${position}Open`]: isOpen });
  };

  data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  render() {
    const { leftOpen } = this.state;

    return (
      <Wrapper>
        <SideMenu 
          isOpen={leftOpen}
          disableGestures
          onChange={isOpen => this.toggleMenu('left', isOpen)}
          openMenuOffset={250}
          menu={<DrawerMenu />}
        >
          <Heading>
            <Menu onPress={() => this.toggleMenu('left', true)}>
              <MaterialIcons 
                  name="menu"
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
              data={this.data}
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
        </SideMenu>
      </Wrapper>
    );
  }
};

export default Overview;
