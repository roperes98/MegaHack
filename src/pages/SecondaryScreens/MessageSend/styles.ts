import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight = 
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${colors.background};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};
`;

export const BottleImage = styled.Image`
    margin-bottom: 24px;
`;

export const MessageSent = styled.Text`
    font-size: 40px;
    margin-bottom: 18px;
    color: ${colors.justWhite};
`;

export const MessageSentText = styled.Text`
    font-size: 28px;
    color: ${colors.justWhite};
`;

export const MessageSentDownText = styled.Text`
    font-size: 23px;
    color: ${colors.justWhite};
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 75%;
    height: 70px;

    background-color: ${colors.purple};
    border-radius: 35px;

    justify-content: center;
    align-items: center;
    margin-top: 60px;
`;

export const SubmitButtonText = styled.Text`
    font-size: 30px;
    color: ${colors.justWhite};
`;