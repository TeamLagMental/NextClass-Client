import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useSpeechSynthesis } from 'react-speech-kit'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import NotificationsIcon from '@material-ui/icons/Notifications'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'
import MenuIcon from '@material-ui/icons/Menu'
import { MicNoneOutlined, MicOffOutlined } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import SettingsIcon from '@material-ui/icons/Settings'
import {
  AppBar,
  Badge,
  Collapse,
  Hidden,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import { AuthContext } from './../../../context/auth'
import { StudentCommands } from './../../../utils/voice/StudentCommands'

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0 1px 8px rgba(0,0,0,.3)',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed'
    }
  },
  toolBar: {
    paddingLeft: theme.spacing(1) / 2,
    paddingRight: theme.spacing(1) / 2
  },
  branding: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    lineHeight: '50px',
    padding: `0 64px 0 0`
  },
  logo: {
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80px'
    }
  },
  searchWrapper: {
    flex: '1 1 0%',
    boxSizing: ' border-box'
  },
  searchForm: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1) * 2,
    display: 'block',
    maxWidth: '800px'
  },
  searchInput: {
    fontSize: '1rem',
    padding: theme.spacing(1) * 1.9,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1) * 1.2
    },
    cursor: 'text',
    textIndent: '30px',
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: '0',
    color: 'inherit'
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '0',
    marginTop: '-24px',
    //color: 'rgba(0,0,0,.87)',
    color: 'inherit'
  }
}));

const Header = ({ logo, logoAltText, toggleFullscreen, toggleDrawer, toogleNotifications }) => {
  const { logout } = useContext(AuthContext)
  const { speak } = useSpeechSynthesis()
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [statusSR, setStatusSR] = useState(false)
  const [action, setAction] = useState('')
  const classes = useStyles()
  const handleSettingdToggle = event => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)
  const handleSearchExpandToggle = () => setSearchExpanded(!searchExpanded)
  const handleDrawerToggle = () => {
    toggleDrawer()
    if (searchExpanded) handleSearchExpandToggle()
  }
  const handleNotificationToggle = () => {
    toogleNotifications()
    if (searchExpanded) handleSearchExpandToggle()
  }
  const commands = StudentCommands(setAction)
  const enableSR = () => {
    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
      alert('Tu navegador no soporta esto...')
    } else {
      if(statusSR){
        SpeechRecognition.stopListening()
        speak({ text: 'Comandos de voz desactivados' })
        return false
      } else {
        SpeechRecognition.startListening({ continuous: true, language: 'es-AR' })
        speak({ text: 'Comandos de voz activados' })
        return true
      }
    }
  }
  useSpeechRecognition({ commands })

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <div className={classes.branding}>
          <img src={logo} alt={logoAltText} className={classes.logo} />
        </div>

        <Hidden xsDown>
          <div className={classes.searchWrapper}>
            <form className={classes.searchForm}>
              <IconButton aria-label="Search" className={classes.searchIcon}>
                <SearchIcon />
              </IconButton>
              <input className={classes.searchInput} type="text" placeholder="Search" autoFocus={true}/>
            </form>
          </div>
        </Hidden>

        <Hidden smUp>
          <span className="flexSpacer" />
        </Hidden>

        <Hidden smUp>
          <IconButton
            color="inherit"
            onClick={handleSearchExpandToggle}
            aria-expanded={searchExpanded}
            aria-label="Show searchbar"
          >
            <SearchIcon />
          </IconButton>
        </Hidden>

        <Hidden xsDown>
          <Tooltip title="Pantalla completa">
            <IconButton color="inherit" onClick={toggleFullscreen}>
              <FullscreenIcon />
            </IconButton>
          </Tooltip>
        </Hidden>

        <Tooltip title={ (statusSR ? 'Desactivar' : 'Activar')+' comandos de voz' }>
          <IconButton color="inherit" onClick={() => setStatusSR(enableSR)}>
            { statusSR ? <MicOffOutlined/> : <MicNoneOutlined/> }
          </IconButton>
        </Tooltip>

        <Tooltip title="Notificaciones">
          <IconButton color="inherit" onClick={handleNotificationToggle}>
            <Badge badgeContent={5} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton
          aria-label="User Settings"
          aria-owns={anchorEl ? 'user-menu' : null}
          aria-haspopup="true"
          color="inherit"
          onClick={handleSettingdToggle}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu id="user-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuraciones" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <NotificationsOffIcon />
            </ListItemIcon>
            <ListItemText primary="Desactivar notificaciones" />
          </MenuItem>
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </MenuItem>
        </Menu>
      </Toolbar>
      <Hidden smUp>
        <Collapse in={searchExpanded} timeout="auto" unmountOnExit>
          <Toolbar className={classes.toolBar}>
            <div className={classes.searchWrapper}>
              <form className={classNames(classes.searchForm, 'mr-0')}>
                <IconButton aria-label="Buscar" className={classes.searchIcon}>
                  <SearchIcon />
                </IconButton>
                <input className={classes.searchInput} type="text" placeholder="Buscar" autoFocus={true}/>
              </form>
            </div>
          </Toolbar>
        </Collapse>
      </Hidden>
      {action}
    </AppBar>
  )
}

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string
}

export default Header