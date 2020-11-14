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

export const NewsBox = styled.TouchableOpacity`
    width: 100%;
    height: 90px;
    border-radius: 8px;

    background-color: #3C3C3C;
    flex-direction: row;
    align-items: center;
    align-self: center;
`;

export const NewsBoxMarker = styled.View`
    width: 35%;
    height: 90px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    background-color: #6FB400;
`;

export const NewsText = styled.Text`
    margin-left: 6px;
    font-size: 18px;

    color: #DDDDDD;
    width: 62%;
`;

export const NewsGroup = styled.View`
    width: 96%;
`;

export const SavedOnlyGroup = styled.View`
    margin-bottom: 17px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SavedOnlyText = styled.Text`
    font-size: 24px;
    color: #dddddd;
`;
