import React, { useState, useEffect, useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { FormatTextdirectionLToR, Settings, WbSunny } from '@material-ui/icons'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab'
import { Hidden, makeStyles} from '@material-ui/core'
import { Header, NotificationCenter, Sidebar, Workspace } from '../../components/dashboard'
import { useAppState } from '../../components/dashboard/AppProvider'
import { MobileBreakpoint } from '../../StyleVariables'
import { AuthContext } from '../../context/auth'
import { teacherRoutes } from '../../routes/RoutesDashboard'

const useStyles = makeStyles(theme => ({
  panel: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "calc(100vh - 64px)",
      paddingTop: "64px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      minHeight: "calc(100vh - 56px)",
      paddingTop: "56px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 64px)"
    },
    display: "flex",
    flexDirection: "row",
    flexGrow: 1
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(1) * 2,
    right: theme.spacing(1) * 3
  }
}))

const DTeacherLayout = () => {
  const { user } = useContext(AuthContext)

  const classes = useStyles()
  const [state, dispatch] = useAppState()
  const [opened, setOpened] = useState(true)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [openSpeedDial, setOpenSpeedDial] = useState(false)

  const resizeDispatch = () => {
    if (typeof Event === "function"){
      window.dispatchEvent(new Event("resize"))
    } else {
      const evt = window.document.createEvent("UIEvents")
      evt.initUIEvent("resize", true, false, window, 0)
      window.dispatchEvent(evt)
    }
  }

  const handleDrawerToggle = () => {
    setOpened(!opened)
    resizeDispatch()
  }

  const handleNotificationToggle = () => setNotificationsOpen(!notificationsOpen)

  const handleFullscreenToggle = () => {
    const element = document.querySelector("#root")

    const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false

    element.requestFullScreen =
      element.requestFullScreen ||
      element.webkitRequestFullScreen ||
      element.mozRequestFullScreen ||
      function() { return false }
    
    document.cancelFullScreen =
      document.cancelFullScreen ||
      document.webkitCancelFullScreen ||
      document.mozCancelFullScreen ||
      function() { return false }
    
    isFullscreen ? document.cancelFullScreen() : element.requestFullScreen()
  }

  const handleSpeedDialOpen = () => setOpenSpeedDial(true)

  const handleSpeedDialClose = () => setOpenSpeedDial(false)

  const getRoutes = (
    <Switch>
      {teacherRoutes.items.map((item, index) =>
        item.type === "external" ? (
          <Route
            exact
            path={item.path}
            component={item.component}
            name={item.name}
            key={index}
          />
        ) : item.type === "submenu" ? (
          item.children.map(subItem => (
            <Route
              exact
              path={`${item.path}${subItem.path}`}
              component={subItem.component}
              name={subItem.name}
            />
          ))
        ) : (
          <Route
            exact
            path={item.path}
            component={item.component}
            name={item.name}
            key={index}
          />
        )
      )}
      <Redirect to="/404" />
    </Switch>
  )

  useEffect(() => {
    const mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`)
    
    if(mediaMatcher.matches) setOpened(false)
    mediaMatcher.addListener((match) => {
      setTimeout(() => {
        if(match.matches) setOpened(false)
        else setOpened(true)
      }, 300)
    })
    
    return () => {
      mediaMatcher.removeListener(match => {
        setTimeout(() => {
          if (match.matches) setOpened(false)
          else setOpened(true)
        }, 300)
      })
    }
  }, [])

  return user ? (
  <>
    <Header
      /*
      logoAltText="Stelar"
      logo={`${process.env.PUBLIC_URL}/static/images/LogoMakr-9LiX9H.png`}
      */
      toggleDrawer={handleDrawerToggle}
      toogleNotifications={handleNotificationToggle}
      toggleFullscreen={handleFullscreenToggle}
    />

    <div className={classNames(classes.panel, "theme-dark")}>
      <Sidebar routes={teacherRoutes.items} opened={opened} toggleDrawer={handleDrawerToggle}/>
      <Workspace opened={opened}>{getRoutes}</Workspace>
      <NotificationCenter
        notificationsOpen={notificationsOpen}
        toogleNotifications={handleNotificationToggle}
      />
    </div>

    <Hidden xsDown>
        <SpeedDial
          ariaLabel="Settings"
          className={classes.speedDial}
          icon={<SpeedDialIcon icon={<Settings/>}/>}
          onBlur={handleSpeedDialClose}
          onClose={handleSpeedDialClose}
          onFocus={handleSpeedDialOpen}
          onMouseEnter={handleSpeedDialOpen}
          onMouseLeave={handleSpeedDialClose}
          open={openSpeedDial}
        >
          <SpeedDialAction
            icon={<WbSunny/>}
            tooltipTitle="Toggle light/dark theme"
            onClick={() => dispatch({ type: "type" })}
          />
          <SpeedDialAction
            icon={ state.direction === "rtl" ? (<FormatTextdirectionLToR/>) : (<FormatTextdirectionLToR/>) }
            tooltipTitle="Toggle LTR/RTL direction"
            onClick={() => dispatch({ type: "direction" })}
          />
        </SpeedDial>
    </Hidden>
  </>
  ) : ( <Redirect to="/login" /> )
}

export default DTeacherLayout