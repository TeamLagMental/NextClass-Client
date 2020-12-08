import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {TableContainer, Table, TableHead, TableBody, TableRow, TablePagination, TableCell} from '@material-ui/core';
import { Wrapper} from './../../../components/dashboard'


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    
  },
  tabla:{
    minWidth: 1000
  }
}); 

const data =[
  {ID: 1, apellido:"Silva", DNI:42567678, nombres:"Roberto Eduardo", fecha: "30-08-2000", edad:20, documentacion: true},
  {ID: 2, apellido:"Ditter", DNI:42567678,  nombres:"Federico Yamil", fecha: "01-04-2001", edad:19, documentacion: true},
  {ID: 3, apellido:"rolon", DNI:42567678,  nombres:"Lautaro Emanuel", fecha: "14-02-1999", edad:21, documentacion: true},
  {ID: 4, apellido:"Rodriges", DNI:42567678,  nombres:"David Ezequiel", fecha: "30-02-2001", edad:19, documentacion: true}
]

export default function DadminUsers() {
  const classes = useStyles

  return (
<Wrapper>
<Paper>
  <Wrapper>
    <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
      >
      <Grid item xs={11} >
        <Typography variant="h3" gutterBottom>
          Usuarios Alumnos
        </Typography>
        </Grid>
      <Grid item xs={1} >
        <Tooltip title="Añadir Alumno" aling="left">
          <Button variant="fab" color="primary" aria-label="Add" >
            <AddIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  
  </Wrapper>
  <TableContainer className={classes.tabla}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Apellido</TableCell>
          <TableCell>Nombres</TableCell>
          <TableCell>DNI</TableCell>
          <TableCell>Fecha Nacimiento</TableCell>
          <TableCell>Edad</TableCell>
          <TableCell>Documentacion Completa</TableCell>
          <TableCell>Acciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(celda =>(
          <TableRow>
            <TableCell>{celda.ID}</TableCell>
            <TableCell>{celda.apellido}</TableCell>
            <TableCell>{celda.nombres}</TableCell>
            <TableCell>{celda.DNI}</TableCell>
            <TableCell>{celda.fecha}</TableCell>
            <TableCell>{celda.edad}</TableCell>
            <TableCell>{celda.documentacion}</TableCell>
            <TableCell>
              <Tooltip title="Eliminar">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Editar">
                <IconButton aria-label="Edit">
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TablePagination title="hola mnndo" >
      </TablePagination>
    </Table>
  </TableContainer>
</Paper>
</Wrapper>
 )
}










/*
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'boton', headerName: 'Botones', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90,},
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, boton: <Button>eliminar</Button> },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
function DUsersas() {
  return (
    <div>   
        <Wrapper>
        <Paper>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      <Tooltip title="Add">
        <Button variant="fab" color="primary" aria-label="Add" >
          <AddIcon />
        </Button>
      </Tooltip>
      <Tooltip title="FAB 'position: absolute;'">
        <Button variant="fab" color="secondary" >
          <AddIcon />
        </Button>
      </Tooltip>
      </Paper>
      </Wrapper>
    </div>
  );
}*/