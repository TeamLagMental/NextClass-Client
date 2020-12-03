import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  media: {
    height: 0
  },
  actions: {
    display: 'flex'
  },
  clamp: {
    position: 'relative',
    height: '1.5em',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      textAlign: 'right',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '40%',
      height: '1.5em',
      background: `linear-gradient(to right, ${fade(
        theme.palette.background.paper,
        0
      )}, ${theme.palette.background.paper} 50%)`
    }
  }
}));

const Comment = ({ text, user, avatar}) => {
  return (
    <Card>
      <CardHeader
        avatar={avatar} 
        title={user} 
        subheader={text} 
      />
    </Card> 
  )
}
Comment.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  avatar: PropTypes.element,

};
const PostCard2 = ({ title, subtitle, text, image, imageHeight, avatar, buttons, Comment}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader avatar={avatar} title={title} subheader={subtitle} />
      <CardMedia
        image={image}
        title={title}
        className={classes.media}
        style={{ paddingTop: imageHeight }}
      />
      <CardContent>
        <Typography component="p" className={classes.clamp}>
          {text}
        </Typography>
      </CardContent>
      {Comment}
      {buttons}
    </Card>
  );
};

PostCard2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imageHeight: PropTypes.number,
  avatar: PropTypes.element,
  buttons: PropTypes.element,
  Comment:PropTypes.element
};

export {PostCard2, Comment} 