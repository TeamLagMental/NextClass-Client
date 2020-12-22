import React from 'react'
import Button from '@material-ui/core/Button'
import { Wrapper } from './../../../../components/dashboard'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

 function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




const useStyles = makeStyles((theme) => ({
    media: {
        height: 0
      },
    root: {
      flexGrow: 1,
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      },
      backgroundColor: theme.palette.background.paper,
    
    },
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    textField: {
        width: '25ch',
      }
  }));


function DStudentCareer(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return(
    <Wrapper>
      <Grid  item xs={12}>
        <Paper className={classes.paper}>
          <Grid  item xs={12}>
            <CardMedia
              image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
              title="Nombre de la Carrera"
              className={classes.media}
              style={{ paddingTop: 270 }}
            />
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start">
              <Button >
                Cambiar imagen
              </Button>
            </Grid>
            <Grid>
              <Typography variant="h3" gutterBottom>
                Nombre de la Carrera
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="h4" gutterBottom>
                Descripcion:
              </Typography>
              <Typography>
              La carrera tiene una duración de 2 años con una carga horaria de 2.133 horas, contarácon un título propio del IPF, avalada por el Ministerio de Cultura y educación de la Provincia de Formosa. 
              La carrera consta de cuatro cuatrimestres, surante los cuales el estudiante deberá regularizar los módulos correspondientes al cuatrimestre en curso. 
              Horarios: Jornada Intensiva de lunes a viernes de 09 a 17 horas, con almuerzo incluido.
              </Typography>
            </Grid>
              <Typography variant="h1" component="h2" gutterBottom></Typography>
            <Grid>
              <Typography variant="h4" gutterBottom>
                Requisitos de Admision:
              </Typography>
              <ListItem>
                <ListItemText
                  primary="Fortocopia de DNI"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary=" Fotocopia del Titulo o  de Constancia de Finalizacion de Secundaria."
                />
              </ListItem>
            </Grid>
              <Grid>
              <Typography variant="h4" gutterBottom>
                Plan de Estudios:
              </Typography>
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Primer Año" {...a11yProps(0)} />
                    <Tab label="Segundo Año" {...a11yProps(1)} />
                    <Tab label="Tercer Año" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <ListItem>
                    <ListItemText
                      primary="mate 1"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="lengua 3"
                    />
                  </ListItem>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Lengua 3
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Fisica termonuclear cuantica
                </TabPanel>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Wrapper>
  )
}

export default DStudentCareer