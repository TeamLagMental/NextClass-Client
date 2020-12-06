import React, { useState, useContext, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { AuthContext } from './../../../context/auth'
import { GetUserInitials, GetUserNames, dateFormat } from './../../../utils'

const useStyles = makeStyles((theme) => ({
    mio: {
        position: 'absolute',
         zIndex: 1
    }
}));

function PostsCard(props){
    const data = props.data
    const key = props.k
    const { user } = useContext(AuthContext)
    const classes = useStyles()
    const [buttonState2, setButtonState2] = useState(true)

    const textFieldChange2 = () => {
        const textFieldValue2 = document.getElementById('standard-full-width '+key).value
        textFieldValue2.length === 0 ? setButtonState2(true) : setButtonState2(false)
    }

    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)){
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    const options = (param) => {
        return (
            <>
                <IconButton aria-label="settings"
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MoreVertIcon />

                </IconButton>

                <Popper open={open}
                    className={classes.mio}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {
                                            user.id === param.user ? (
                                                <>
                                                <MenuItem onClick={handleClose}>Editar</MenuItem>
                                                <MenuItem onClick={handleClose}>Eliminar</MenuItem>
                                                </>
                                            ) : (
                                                <>
                                                <MenuItem onClick={handleClose}>Reportar</MenuItem>
                                                </>
                                            )
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                    </Grow>
                    )}
                </Popper>
            </>
        )
    }

    return (
        <Card className="mb-xs">
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <GetUserInitials userId={data.user} />
                    </Avatar>
                }
                action={
                    options(data)
                }
                title={(<GetUserNames userID={data.user} />)}
                subheader={ dateFormat(data.createdAt) }
            />
            <Divider/>
            <CardContent>
                <Typography variant="body2" component="p">
                    {data.body}
                </Typography>
            </CardContent>
            <Divider/>
            <ListItem>
                <ListItemAvatar>
                    <Avatar aria-label="recipe">
                        <GetUserInitials userId={user.id} />
                    </Avatar>
                </ListItemAvatar>
                <ListItem>
                    <TextField
                        id={'standard-full-width '+key}
                        label="Realizar un comentario..."
                        multiline
                        rows={1}
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        style={{ margin: 1 }}
                        onChange={textFieldChange2}
                    />
                    <Divider />
                    <CardActions>
                        <span className="flexSpacer" />
                        <Button variant="contained" color="primary" disabled={buttonState2} >
                            Publicar
                        </Button>
                    </CardActions>
                </ListItem>
            </ListItem>
        </Card>
    )
}

export default PostsCard