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