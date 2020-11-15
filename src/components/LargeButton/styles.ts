import styled from 'styled-components/native';
import colors from '../../pages/styles/colors';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 16px 15px;
    margin-bottom: 1.2px;

    background-color: #2e2e2e;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;
