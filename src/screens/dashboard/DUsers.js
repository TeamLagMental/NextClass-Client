
/*import { Wrapper,} from './../../components/dashboard'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Paper } from '@material-ui/core';
*/
import * as React from 'react';
import { XGrid } from '@material-ui/x-grid';

const rows = [
  { 
    id:1,
    Nombres: 'Roberto Eduardo',
    Apellido: 'Silva',
    DNI: 42758766,
    FechaNacimiento: '30-08-2000',
    Edad: 20,
    FaltaDocumento: true,
  },
];

export default function  DUsers() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <XGrid
        columns={[
          { field: 'id' },
          { field: 'Nombres' },
          { field: 'Apellido' },
          { field: 'DNI' },
          { field: 'FechaNacimiento' },
          { field: 'Edad', resizable: false },
          { field: 'FaltaDocumento' },
        ]}
        rows={rows}
      />
    </div>
  );
}
/*function DUsersas() {
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