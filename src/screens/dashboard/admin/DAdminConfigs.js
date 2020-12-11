import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from "@material-ui/core/styles"
import { FormatAlignRight } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(()=>({
    switch: {
        width:"500%",
    },
    input:{
        width:"200%"
    },

}))

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  
  


function DAdminConfigs  () {
    
    const classes = useStyles();
    const [value, setValue] = React.useState('eSTELAR');
    const [value2, setValue2] = React.useState('Campus virtual');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleChange2 = (event) => {
        setValue(event.target.value);
    }
    
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChangeAcordeon = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };
    const styles = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChangeAcordeon('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Nombre del Sistema</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <TextField
                            className={classes.input}
                            id="outlined-multiline-flexible"
                            label=""
                            multiline
                            rowsMax={2}
                            value={value}
                            onChange={handleChange}
                            variant="outlined"
                        /><br></br><br/>
                        <Button variant="contained" color="primary">
                            Guardar
                        </Button>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChangeAcordeon('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Descripción</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        className={classes.input}
                        id="outlined-multiline-flexible"
                        label=""
                        multiline
                        rowsMax={4}
                        value={value2}
                        onChange={handleChange2}
                        variant="outlined"
                    /><br></br><br/>
                        <Button variant="contained" color="primary">
                            Guardar
                        </Button>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChangeAcordeon('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Inscripciones Asignaturas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    className={classes.switch}
                                    value="hola"
                                    control={<Switch color="primary" />}
                                    label="Programado"
                                    labelPlacement="right"
                                />
                            </FormGroup>
                        </FormControl>
                <Typography>
                    Desde:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label=""
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                />
                            </Grid>
                    </MuiPickersUtilsProvider>
                    Hasta:
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label=""
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                />
                            </Grid>
                    </MuiPickersUtilsProvider>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel4'} onChange={handleChangeAcordeon('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Inscripciones a Carreras </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                className={styles.switch}
                                value="hola"
                                control={<Switch color="primary" />}
                                label="Programado"
                                labelPlacement="right"
                            />
                        </FormGroup>
                    </FormControl>
                    <Typography>
                        Desde: 
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label=""
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        Hasta:
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label=""
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default DAdminConfigs;