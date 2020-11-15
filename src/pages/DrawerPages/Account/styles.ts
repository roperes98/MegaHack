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

export const SectionTitle = styled.Text`
    align-self: flex-start;
    margin-top: 28px;
    margin-left: 8px;
    margin-bottom: 10px;
    font-size: 28px;
    color: ${colors.justWhite};
`;

export const AccountInfoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 16px 15px;
    margin-bottom: 1px;

    background-color: #545454;
`;

export const Banking = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const AccountInfo = styled.View``;

export const MainInfo = styled.Text`
    font-size: 21px;
    color: ${colors.softWhite};
`;

export const InfoName = styled.Text`
    font-size: 15px;
    color: ${colors.softGray};
`;

export const CopyButton = styled.TouchableOpacity``;