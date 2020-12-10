import React , {useState} from 'react';
import MaterialTable from 'material-table';
import { Wrapper} from './../../../components/dashboard'
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
import Remove from "@material-ui/icons/Remove";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import {Modal, TextField, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';


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

}))

const columnas = [
 {
   title: 'ID',
   field: 'ID'
 },{
  title: 'Apellido',
  field: 'apellido'
},{
  title: 'Nombres',
  field: 'nombres'
},{
  title: 'Fecha de Nacimiento',
  field: 'fecha'
},{
  title: 'Edad',
  field: 'edad'
},{
  title: 'DNI',
  field: 'DNI'
},{
  title: 'Falta Documentacion',
  field: 'doc'
},
]
const dataAdmin =[
  {ID: 1, apellido:"rolon", DNI:42567678,  nombres:"Lautaro Emanuel", fecha: "00-00-0000", edad:21, doc: "true"},
]
const dataProfe =[
  {ID: 1, apellido:"Gimenez", DNI:42567678, nombres:"Luana", fecha: "00-00-0000", edad:43, doc: "true"},
  {ID: 2, apellido:"Ovelar", DNI:42567678,  nombres:"Hector", fecha: "0o-00-0000", edad:36, doc: "true"},
  {ID: 3, apellido:"rolon", DNI:42567678,  nombres:"Lautaro Emanuel", fecha: "00-00-0000", edad:21, doc: "true"},
  {ID: 4, apellido:"Soryu", DNI:42567678,  nombres:"Asuka Langley", fecha: "00-00-0000", edad:28, doc: "true"},
  {ID: 5, apellido:"Gardner", DNI:42567678, nombres:"Gardner", fecha: "00-00-0000", edad:24, doc: "true"},
  {ID: 6, apellido:"Ditter", DNI:42567678,  nombres:"Federico Yamil", fecha: "00-00-0000", edad:19, doc: "true"},
  {ID: 7, apellido:"Silva", DNI:42567678,  nombres:"Roberto Eduardo", fecha: "00-00-0000", edad:21, doc: "true"},
]
const dataAlumno =[
  {ID: 1, apellido:"Megia", DNI:42567678, nombres:"Celeste", fecha: "00-00-0000", edad:20, doc: "true"},
  {ID: 2, apellido:"Ortiz", DNI:42567678,  nombres:"Benito", fecha: "00-00-0000", edad:19, doc: "true"},
  {ID: 3, apellido:"Fernandez", DNI:42567678,  nombres:"Leandro", fecha: "00-00-0000", edad:21, doc: "true"},
  {ID: 4, apellido:"Rodriges", DNI:42567678,  nombres:"David Ezequiel", fecha: "00-00-0000", edad:19, doc: "true"},
  {ID: 5, apellido:"Almeida", DNI:42567678, nombres:"Martin", fecha: "00-00-0000", edad:20, doc: "true"},
  {ID: 6, apellido:"Veron", DNI:42567678,  nombres:"Facundo", fecha: "00-00-0000", edad:19, doc: "true"},
  {ID: 7, apellido:"Perez", DNI:42567678,  nombres:"Rodrigo", fecha: "00-00-0000", edad:21, doc: "true"},
]

export default function DAdminUsers() {
  const styles = useStyles();

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const abrirCerrarModalEliminar =()=>{
    setModal1(!modal1);
  }

  const abrirCerrarModalEditar =()=>{
    setModal2(!modal2);
  }

  const bodyEdit = (
    <div className={styles.modal} >
      <DialogTitle id="alert-dialog-title1">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={styles.avatar}>
              R
            </Avatar>
          }
          title={<Typography variant="h5" gutterBottom>Editar Usuario</Typography>}
        />
        <CardMedia
          className={styles.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />{/*<Avatar alt="" src="/" className={classes.large} /> Agregar Usuario*/}
      </DialogTitle>
      <DialogContent>
        <form className={styles.form} noValidate autoComplete="off">
                <div/><TextField className={styles.inputs} required id="standard-required" label="Nombre/s" defaultValue="Federico" />
                <div/><TextField className={styles.inputs} required id="standard-required" label="Apellido" defaultValue="Ditter" />
                <div/><TextField className={styles.inputs} required id="standard-required" label="Edad" defaultValue="19" />                       
                <div/><TextField className={styles.inputs} required id="standard-required" label="DNI" defaultValue="433322421" maxlength="16"/>
                <div/><TextField className={styles.inputs} required id="standard-required" label="Dirección" defaultValue="" />
                <div/><TextField className={styles.inputs} required id="standard-required" label="E-Mail" defaultValue="fedepitter@hotmail.com" /><br/>
                <div/><TextField className={styles.inputs} required id="standard-required" label="Tipo de Usuario" defaultValue="Estudiante" />
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
            onClick={()=>abrirCerrarModalEditar()()}
          >
            Editar
          </Button>
      </DialogActions>
    </div>
  )

  const bodyDelete = (
    <div className={styles.modal}>
      <DialogTitle id="alert-dialog-title2">
          Eliminar Usuario
      </DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description2">
  ¿Estas seguro que deseas eliminar al usuario vegeta777?
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
  <Wrapper>
  <Wrapper>
   <MaterialTable
    columns={columnas}
    data={dataAlumno}
    title='Usuarios Alumnos'
    actions={[
      {
        tooltip:'Eliminar',
        icon : Remove,
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
    Delete: DeleteOutline,
    Export: SaveAlt,
    Filter: FilterList,
    FirstPage: FirstPage,
    LastPage: LastPage,
    NextPage: ChevronRight,
    PreviousPage: ChevronLeft,
    Search: Search,
    ThirdStateCheck: Remove,
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
  <Wrapper>
   <MaterialTable
    columns={columnas}
    data={dataProfe}
    title='Usuarios Profesores'
    actions={[
      {
        tooltip:'Eliminar',
        icon : Remove,
        onClick : ()=>abrirCerrarModalEliminar()
      },
      {
        tooltip:'Editar',
        icon : Edit,
        onClick : ()=>abrirCerrarModalEditar()
      }
    ]}
    icons={{ 
      Check: Check,
      DetailPanel: ChevronRight,
      Delete: DeleteOutline,
      Export: SaveAlt,
      Filter: FilterList,
      FirstPage: FirstPage,
      LastPage: LastPage,
      NextPage: ChevronRight,
      PreviousPage: ChevronLeft,
      Search: Search,
      ThirdStateCheck: Remove,
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
  <Wrapper>
   <MaterialTable
    columns={columnas}
    data={dataAdmin}
    title='Usuarios Administrador'
    actions={[
      {
        tooltip:'Eliminar',
        icon : Remove,
        onClick : ()=>abrirCerrarModalEliminar()
      },
      {
        tooltip:'Editar',
        icon : Edit,
        onClick :()=>abrirCerrarModalEditar()
      }
    ]}
    icons={{ 
      Check: Check,
      DetailPanel: ChevronRight,
      Delete: DeleteOutline,
      Export: SaveAlt,
      Filter: FilterList,
      FirstPage: FirstPage,
      LastPage: LastPage,
      NextPage: ChevronRight,
      PreviousPage: ChevronLeft,
      Search: Search,
      ThirdStateCheck: Remove,
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
  </Wrapper>
 )
}
