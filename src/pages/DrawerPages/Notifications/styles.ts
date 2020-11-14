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

export const NotificationBox = styled.TouchableOpacity`
    width: 100%;
    height: 76px;
    border-radius: 8px;

    background-color: #3C3C3C;
    flex-direction: row;
    align-items: center;
    align-self: center;
`;

export const NotificationBoxMarker = styled.View`
    width: 4%;
    height: 76px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    background-color: #6FB400;
`;

export const NotificationText = styled.Text`
    margin-left: 16px;
    font-size: 20px;

    color: #DDDDDD;
    width: 60%;
`;

export const NotificationGroup = styled.View`
    width: 94%;
`;

export const NotificationsDateBox = styled.View`
    width: 73px;
    height: 30px;
    margin-bottom: 16px;

    border: solid 2px #DDDDDD;
    border-radius: 7px;

    align-items: center;
    justify-content: center;
`;

export const NotificationsDate = styled.Text`
    color: #DDDDDD;
    font-size: 20px;
    line-height: 24px;
`;
