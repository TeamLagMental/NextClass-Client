import React , {useState} from 'react';
import MaterialTable from 'material-table';
import { Wrapper} from '../../../components/dashboard'
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import Edit from "@material-ui/icons/Edit";
import {Modal, TextField, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme)=>({
  modal:{
    position : 'absolute',
    width : '700',
    backgroundColor : 'white',
    border : '2 px solid #000',
    boxShadow : theme.shadows[5],
    padding: theme.spacing(2,4,3,4),
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'
  },
  inputs:{
    width:"100%"
  }

}))

const columnas = [
 {
   title: 'ID',
   field: 'ID'
 },{
  title: 'Nombre',
  field: 'nombre'
},{
  title: 'Descripcion',
  field: 'descripcion'
},{
  title: 'Requisitos',
  field: 'requisitos'
},{
  title: 'Director',
  field: 'director'
},
]
  
const data=[
  {ID: 1, nombre :'Desarrollo de Sofware', descripcion:'La carrera tiene una duración de 2 años con una carga horaria de 2.133 horas, contarácon un título propio del IPF, avalada por el Ministerio de Cultura y educación de la Provincia de Formosa. La carrera consta de cuatro cuatrimestres, surante los cuales el estudiante deberá regularizar los módulos correspondientes al cuatrimestre en curso. Horarios: Jornada Intensiva de lunes a viernes de 09 a 17 horas, con almuerzo incluido.', 
  requisitos: 'Fortocopia de DNI. Fotocopia del Titulo o  de Constancia de Finalizacion de Secundaria.', director:'Ditter Federico'},
  {ID: 2, nombre :'Mecatronica', descripcion:'La carrera tiene una duración de 2 años con una carga horaria de 2.133 horas, contarácon un título propio del IPF, avalada por el Ministerio de Cultura y educación de la Provincia de Formosa. La carrera consta de cuatro cuatrimestres, surante los cuales el estudiante deberá regularizar los módulos correspondientes al cuatrimestre en curso. Horarios: Jornada Intensiva de lunes a viernes de 09 a 17 horas, con almuerzo incluido.', 
  requisitos: 'Fortocopia de DNI. Fotocopia del Titulo o  de Constancia de Finalizacion de Secundaria.', director:'Rolon Lautaro'},
]

export default function DAdminCarr() {
  const styles = useStyles();

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const abrirCerrarModalEliminar =()=>{
    setModal1(!modal1);
  }
  const abrirCerrarModalEditar =()=>{
    setModal2(!modal2);
  }
  const abrirCerrarModalAñadir =()=>{
    setModal3(!modal3);
  }

  const bodyAdd =(
    <div className={styles.modal}>
      <DialogTitle id="alert-dialog-title3">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={styles.avatar}>
            R
          </Avatar>
        }
        title={<Typography variant="h5" gutterBottom>Agregar Carrera</Typography>}
      />
      <CardMedia
        className={styles.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />{/*<Avatar alt="" src="/" className={classes.large} /> Agregar Usuario*/}
      </DialogTitle>
      <DialogContent>
        <form className={styles.form} noValidate autoComplete="off">
          <div/><TextField className={styles.inputs} required id="standard-required" label="Nombre" defaultValue="" />
          <div/><TextField className={styles.inputs} required id="standard-required" label="Descripcion" defaultValue="" />
          <div/><TextField className={styles.inputs} required id="standard-required" label="Requisitos" defaultValue="" /> <br/><br/>
          <div/><InputLabel className={styles.inputs} required id="demo-simple-select-label">Director</InputLabel>
          <Select
            className={styles.inputs}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={""}
            >
          <MenuItem value={10}>Silva Roberto</MenuItem>
          <MenuItem value={10}>Rolon Lautaro</MenuItem>
          <MenuItem value={20}>Ditter Federico</MenuItem>
          </Select> 
        </form>
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>abrirCerrarModalAñadir()} color="primary">
              Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            startIcon={<AddIcon />}
            onClick={()=>abrirCerrarModalAñadir()}
          >
            Agregar
          </Button>
      </DialogActions>
    </div>
  )
  const bodyEdit = (
    <div className={styles.modal} >
      <DialogTitle id="alert-dialog-title1">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={styles.avatar}>
              R
            </Avatar>
          }
          title={<Typography variant="h5" gutterBottom>Editar Carrera</Typography>}
        />
        <CardMedia
          className={styles.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />{/*<Avatar alt="" src="/" className={classes.large} /> Agregar Usuario*/}
      </DialogTitle>
      <DialogContent>
        <form className={styles.form} noValidate autoComplete="off">
          <div/><TextField className={styles.inputs} required id="standard-required" label="Nombre" defaultValue="" />
          <div/><TextField className={styles.inputs} required id="standard-required" label="Descripcion" defaultValue="" />
          <div/><TextField className={styles.inputs} required id="standard-required" label="Requisitos" defaultValue="" /> <br/><br/>
          <div/><InputLabel className={styles.inputs} required id="demo-simple-select-label">Director</InputLabel>
          <Select
            className={styles.inputs}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={""}
            >
          <MenuItem value={10}>Silva Roberto</MenuItem>
          <MenuItem value={10}>Rolon Lautaro</MenuItem>
          <MenuItem value={20}>Ditter Federico</MenuItem>
          </Select> 
        </form>             
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>abrirCerrarModalEditar()} color="primary">
              Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            startIcon={<EditIcon />}
            onClick={()=>abrirCerrarModalEditar()}
          >
            Editar
          </Button>
      </DialogActions>
    </div>
  )

  const bodyDelete = (
    <div className={styles.modal}>
      <DialogTitle id="alert-dialog-title2">
        Eliminar Carrera
      </DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description2">
  ¿Estas seguro que deseas eliminar la Carrera Desarrollo de Software?
          </DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>abrirCerrarModalEliminar()} color="primary">
              Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={styles.button}
            startIcon={<DeleteIcon />}
            onClick={()=>abrirCerrarModalEliminar()}
          >
            Eliminar
          </Button>
      </DialogActions>
    </div>
  )
  return(
  <>
  <Wrapper>
    <Button
      variant="contained"
      color="primary"
      className={styles.button}
      startIcon={<AddIcon />}
      onClick={()=>abrirCerrarModalAñadir()}
    >
      Añadir nueva Materia
    </Button>
   <MaterialTable
    columns={columnas}
    data={data}
    title='Materias'
    actions={[
      {
        tooltip:'Eliminar',
        icon : DeleteIcon,
        onClick : ()=>abrirCerrarModalEliminar()
    },
    {
      tooltip:'Editar',
      icon : Edit,
      onClick : (event, rowData) =>abrirCerrarModalEditar() 
      //con  (event, rowData) => 
      //en rowData te trae los datos de la fila que seleccionaste
    }
  ]}
  icons={{ 
    Check: Check,
    DetailPanel: ChevronRight,
    Delete: DeleteIcon,
    Export: SaveAlt,
    Filter: FilterList,
    FirstPage: FirstPage,
    LastPage: LastPage,
    NextPage: ChevronRight,
    PreviousPage: ChevronLeft,
    Search: Search,
    ThirdStateCheck: DeleteIcon,
    Add: Add,
    SortArrow: ArrowDownward,
    Clear: Clear,
    Edit: Edit,
    ViewColumn: ViewColumn
  }}
  options={{
      actionsColumnIndex : -1
  }}
  localization ={{
    header:{
      actions : 'Acciones'
    },
    toolbar: {
      searchTooltip : 'Buscar',
      searchPlaceholder : 'Buscar',
      exportName:'Exportar como Excel'
    },
    body:{
      emptyDataSourceMessage:'No hay Resultados'
    },
    pagination:{
      labelRowsSelect:'Filas',
      firstAriaLabel:'Primera Página',
      firstTooltip:'Primera Página',
      previousAriaLabel:'Una Página atrás',
      previousTooltip: 'Una Página atrás',
      nextAriaLabel: 'Siguiente Pagina',
      nextTooltip:'Siguiente Pagina',
      lastAriaLabel:'Ultima Pagina',
      lastTooltip:'Ultima Pagina',
    }
  }}
   >
    </MaterialTable>
  </Wrapper>
 
  <Modal
    open={modal1}
    onClose={abrirCerrarModalEliminar}
    >
    {bodyDelete}
  </Modal>
  <Modal
    open={modal2}
    onClose={abrirCerrarModalEditar}
    >
    {bodyEdit}
  </Modal>
  <Modal
    open={modal3}
    onClose={abrirCerrarModalAñadir}
    >
    {bodyAdd}
  </Modal>
  </>
 )
}
