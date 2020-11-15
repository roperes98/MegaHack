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
    align-items: center;
`;

export const Header = styled.View`
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

export const ScoreCircle = styled.View`
    background-color: #FFA500;
    width: 332px;
    height: 332px;

    margin-top: 28px;
    
    border: solid 8px #925E00;
    border-radius: 166px;

    justify-content: center;
    align-items: flex-end;
`;

export const ScoreText = styled.Text`
    color: #fff;
    font-size: 42px;
    margin-right: 20px;
`;

export const ScoreSubText = styled.Text`
    color: #fff;
    font-size: 32px;
    top: -10px;
    margin-right: 20px;
    margin-bottom: 15px;
`;

export const LastUpdated = styled.View`
    flex-direction: row;
    margin-top: 32px;
    align-items: center;
`;

export const LastUpdatedText = styled.Text`
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
`;

export const ScoreInfo = styled.View`
    margin-top: 30px;
    width: 100%;
`;

export const ScoreInfoTitle = styled.Text`
    margin-left: 11px;
    font-size: 28px;
    color: white;
`;

export const ScoreInfoCards = styled.View`
    margin-top: 12px;
`;

export const Card = styled.TouchableOpacity`
    width: 100%;
    padding: 16px 15px;
    background-color: #2e2e2e;
    justify-content: center;
`;

export const MainInfo = styled.Text`
    font-size: 21px;
    color: #EDEDED;
`;

export const InfoName = styled.Text`
    font-size: 15px;
    color: #BEBEBE;
`;