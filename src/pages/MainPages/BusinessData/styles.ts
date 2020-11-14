import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.View`
    background: ${colors.background};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};
`;

export const Header = styled.View`
    align-self: center;
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 9px;
`;

export const Button = styled.TouchableOpacity``;

export const PageTitle = styled.Text`
    font-size: 30px;
    color: white;
    line-height: 37px;
`;

export const GraphicData = styled.View`
    margin-top: -30px;
`;

export const OperatingProfit = styled.Text`
    font-size: 18px;
    color: #fff;
    align-self: center;
    margin-top: -50px;
`;

export const BusinessDataSection = styled.View`
    margin-top: 30px;
    width: 92%;
    align-self: center;
    justify-content: space-between;
`;

export const BusinessDataSectionTitleGroup = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const BusinessDataSectionTitle = styled.Text`
    margin-left: -12px;
    font-size: 26px;
    color: #fff;
    margin-bottom: 12px;
`;

export const BusinessDataSectionCards = styled.ScrollView`
    width: 100%;
`;

export const Card = styled.View`
    height: 104px;
    width: 45%;
    background-color: #c4c4c4;
`;

export const CardText = styled.Text`
    margin-top: 4px;
    font-size: 18px;
    align-self: center;
`;

export const CardTextValue = styled.Text`
    margin-top: 16px;
    font-size: 24px;
    align-self: center;
`;