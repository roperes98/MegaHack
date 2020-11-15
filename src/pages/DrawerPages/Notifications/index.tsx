import React from 'react';

import { Text } from 'react-native';
import Heading from '../../../components/Heading';

import { 
  Wrapper, 
  NotificationBox, 
  NotificationBoxMarker, 
  NotificationText, 
  NotificationGroup,
  NotificationsDateBox,
  NotificationsDate,
  NotificationsOfTheDay
} from './styles';

const Notifications: React.FC = () => {
  return (
    <Wrapper>
      <Heading>Notificações</Heading>

      <NotificationGroup>
        <NotificationsOfTheDay>
        <NotificationsDateBox>
          <NotificationsDate>09/11</NotificationsDate>
        </NotificationsDateBox>

        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>





        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        </NotificationsOfTheDay>
        <NotificationsOfTheDay>
        <NotificationsDateBox>
          <NotificationsDate>09/11</NotificationsDate>
        </NotificationsDateBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        </NotificationsOfTheDay>
        <NotificationsOfTheDay>
        <NotificationsDateBox>
          <NotificationsDate>09/11</NotificationsDate>
        </NotificationsDateBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        <NotificationBox>
          <NotificationBoxMarker />
          <NotificationText>Um TED foi encaminhado para a sua conta</NotificationText>
        </NotificationBox>
        </NotificationsOfTheDay>
      </NotificationGroup>
    </Wrapper>
  );
};

export default Notifications;
