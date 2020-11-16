import styled from 'styled-components/native';
import colors from '../../pages/styles/colors';

export const Container = styled.View`
    background: ${colors.darkGray};
    height: 100%;
`;

export const MenuContainer = styled.View`
`;
export const ProfileInfo = styled.View`
    background: ${colors.tabBackground};
    height: 150px;
    align-items: center;
    justify-content: center;
`;
export const ProfileImage = styled.View`
`;
export const ProfileInfoData = styled.View`
`;
export const ProfileName = styled.Text`
    font-weight: 700;
    color: #fff;
`;
export const ProfileEmail = styled.Text`
    color: #fff;
`;
export const MenuRoutes = styled.TouchableOpacity``;