import React from 'react';
import moment from 'moment';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import InfoIcon from '@material-ui/icons/Info';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneMissedIcon from '@material-ui/icons/PhoneMissed';

import Avatar from '@material-ui/core/Avatar';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const styles = {
  indigoText: {
    color: indigo[500],
    backgroundColor: 'transparent'
  },
  redText: {
    color: red[500],
    backgroundColor: 'transparent'
  },
  yellowText: {
    color: yellow[500],
    backgroundColor: 'transparent'
  },
  defaultText: {
    backgroundColor: 'transparent',
    color: 'inherit'
  }
};

const date = Date.now();

export const mockNotifications = [
  {
    avatar: (
      <Avatar style={{ ...styles.yellowText }}>
        <InfoIcon />
      </Avatar>
    ),
    title: 'Actualización',
    subtitle: 'Versión 4.5'
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <DeleteSweepIcon />
      </Avatar>
    ),
    title: 'Mi tarea eliminada',
    subtitle: moment(date).format('MMMM Do YYYY, h:mm:ss a')
  },
  {
    avatar: (
      <Avatar style={{ ...styles.defaultText }}>
        <CheckCircleIcon />
      </Avatar>
    ),
    title: 'Tarea entregada (1)',
    subtitle: moment(new Date(date - 1000 * 60 * 60)).format(
      'MMMM Do YYYY, h:mm:ss a'
    )
  }
]