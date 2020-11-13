import React, { useState } from 'react'
import PropTypes from 'prop-types'
//import format from 'date-fns/format'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { makeStyles } from '@material-ui/core/styles'

//import { formatPrice, getWeatherIcon } from './../../../Helpers.js'
import { mockNotifications } from './../../../utils/mock'
import { notificationCenterWidth } from './../../../StyleVariables'

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: notificationCenterWidth,
    maxWidth: notificationCenterWidth,
    [theme.breakpoints.down('sm')]: {
      top: '56px!important',
      height: 'calc(100vh - 56px)'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px!important',
      height: 'calc(100vh - 64px)'
    },
    zIndex: theme.zIndex.drawer + 99
  },
  modal: {
    [theme.breakpoints.down('sm')]: {
      top: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    },
    zIndex: theme.zIndex.drawer + 99
  },
  backdrop: {
    [theme.breakpoints.down('sm')]: {
      top: '56px'
    },
    [theme.breakpoints.up('sm')]: {
      top: '64px'
    }
  },
  container: {
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    zIndex: 1,
    flexGrow: 1
  },
  tabsRoot: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: '50%',
    color: theme.palette.text.primary
  },
  padding: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1) * 2,
      paddingRight: theme.spacing(1) * 2,
      paddingTop: theme.spacing(1) * 2,
      paddingBottom: theme.spacing(1) * 2
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1) * 3,
      paddingRight: theme.spacing(1) * 3,
      paddingTop: theme.spacing(1) * 2,
      paddingBottom: theme.spacing(1) * 2
    }
  }
}));

const NotificationCenter = ({ notificationsOpen, toogleNotifications }) => {
  const classes = useStyles();
  const [tab, setTab] = useState(1);
  //const [stocks] = useState(undefined);
  //const [forecast] = useState(undefined);
  //const [today] = useState(Date.now());

  const handleTabToggle = (event, tab) => setTab(tab);

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={notificationsOpen}
      ModalProps={{
        keepMounted: false,
        className: classes.modal,
        BackdropProps: {
          className: classes.backdrop
        },
        onBackdropClick: toogleNotifications
      }}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Tabs
        value={tab}
        onChange={handleTabToggle}
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        centered
      >
        <Tab classes={{ root: classes.tabRoot }} label="Today" />
        <Tab classes={{ root: classes.tabRoot }} label="Notifications" />
      </Tabs>
      <div className={classes.container}>
        {tab === 0 && (
          <List>
            {mockNotifications.map((notification, index) => (
              <ListItem button key={index}>
                {notification.avatar}
                <ListItemText
                  primary={notification.title}
                  secondary={notification.subtitle}
                />
              </ListItem>
            ))}
          </List>
        )}
        {tab === 1 && (
          <List>
            {mockNotifications.map((notification, index) => (
              <ListItem button key={index}>
                {notification.avatar}
                <ListItemText
                  primary={notification.title}
                  secondary={notification.subtitle}
                />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </Drawer>
  )
}

NotificationCenter.propTypes = {
  notificationsOpen: PropTypes.bool,
  toogleNotifications: PropTypes.func
}

export default NotificationCenter