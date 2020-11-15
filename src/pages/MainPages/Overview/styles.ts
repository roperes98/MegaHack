import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    background: ${colors.background};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};
    align-items: center;
`;

export const Heading = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 96%;
    margin-top: 22px;
    margin-bottom: 27.5px;
`;

export const Menu = styled.TouchableOpacity``;

export const OverviewInfo = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

export const OverviewInfoTitle = styled.Text`
    font-family: Montserrat-Bold;
    font-weight: bold;
    font-size: 30px;
    color: ${colors.primaryPink};
`;

export const MoneyTotal = styled.Text`
    margin-top: 5.5px;
    margin-bottom: 2px;
    font-weight: bold;
    font-size: 35px;
    color: ${colors.justWhite};
`;

export const MoneyReturn = styled.Text`
    font-weight: bold;
    font-size: 19px;
    color: #C7C7C7;
    margin-bottom: 4px;
`;

export const BankingFunctions = styled.View`
    width: 100%;
    margin-top: 4px;
`;