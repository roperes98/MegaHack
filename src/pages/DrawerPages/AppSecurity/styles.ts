import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;
    
export const Wrapper = styled.SafeAreaView`
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
    color: ${colors.justWhite};
    line-height: 37px;
`;

export const DogImage = styled.Image`
    height: 400px;
    width: 400px;
`;

export const FingerprintGroup = styled.View`
    margin-top: 17px;
    margin-bottom: 28px;
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FingerprintText = styled.Text`
    font-size: 24px;
    color: #dddddd;
`;

export const ExitInAllDevices = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 16px 15px;
    margin-top: 28px;

    background-color: #545454;
`;

export const ExitInAllDevicesText = styled.Text`
    font-size: 18px;
    color: #dddddd;
`;