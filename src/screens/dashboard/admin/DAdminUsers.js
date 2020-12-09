import * as React from 'react';
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
        onClick :  (event, rowData) =>alert("esta eliminando al usuario Alumno :"+rowData.apellido+' '+rowData.nombres)
    },
    {
      tooltip:'Editar',
      icon : Edit,
      onClick : (event, rowData) =>alert("esta editando al usuario alumno : "+rowData.apellido+' '+rowData.nombres) 
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
        onClick : (event, rowData) =>alert("esta eliminando al usuario Profesor :"+rowData.apellido+' '+rowData.nombres)
      },
      {
        tooltip:'Editar',
        icon : Edit,
        onClick : (event, rowData) =>alert("esta editando al usuario Profesor:"+rowData.apellido+' '+rowData.nombres)
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
        onClick : (event, rowData) =>alert("esta eliminando al usuario administrador :"+rowData.apellido+' '+rowData.nombres)
      },
      {
        tooltip:'Editar',
        icon : Edit,
        onClick :(event, rowData) =>alert("esta editando al Administrador :"+rowData.apellido+' '+rowData.nombres)
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
  </Wrapper>
 )
}
