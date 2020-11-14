import React from 'react';

import { Text } from 'react-native';

import { 
  Wrapper, 
  NotificationBox, 
  NotificationBoxMarker, 
  NotificationText, 
  NotificationGroup,
  NotificationsDateBox,
  NotificationsDate,
} from './styles';

const Notifications: React.FC = () => {
  return (
    <Wrapper>
      <NotificationGroup>
        <NotificationsDateBox>
          <NotificationsDate>09/11</NotificationsDate>
        </NotificationsDateBox>

        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
      </NotificationGroup>
    </Wrapper>
  );
};

export default Notifications;
