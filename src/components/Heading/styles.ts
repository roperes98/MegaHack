import styled from 'styled-components/native';
import colors from '../../pages/styles/colors';

export const Header = styled.View`
    width: 93%;
    margin-bottom: -15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 9px;
`;

export const Button = styled.TouchableOpacity``;

export const PageTitle = styled.Text`
    font-size: 30px;
    color: ${colors.softWhite};
    line-height: 37px;
`;
