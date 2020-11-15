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

export const HelpBox = styled.View`
    width: 90%;
    margin-top: 50px;
    align-items: center;
`;

export const HelpText = styled.Text`
    font-size: 18px;
    color: ${colors.justWhite};
`;

export const HelpUserText = styled.TextInput`
    width: 100%;
    height: 222px;
    margin-top: 26px;

    border: solid 3px #C4C4C4;
    border-radius: 10px;
    padding: 15px;

    color: ${colors.justWhite};
    font-size: 17px;
    textAlignVertical: top;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 75%;
    height: 70px;

    background-color: ${colors.purple};
    border-radius: 35px;

    justify-content: center;
    align-items: center;
    margin-top: 37px;
`;

export const SubmitButtonText = styled.Text`
    font-size: 30px;
    color: ${colors.justWhite};
`;