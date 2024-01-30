import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

import './usersList.css'
import { Add, AddAlarm, Update } from '@mui/icons-material';
const initialRows = [
  { id: 1, FullName: 'Snow KATE', PhoneNumber: '+212 623933751', role: 'Admin', Password: 'p@ass' },
  { id: 2, FullName: 'Stark JOHN', PhoneNumber: '+123 4567890', role: 'User', Password: 'secure123' },
  { id: 3, FullName: 'Lannister EMMA', PhoneNumber: '+987 6543210', role: 'User', Password: 'lionheart' },
  { id: 4, FullName: 'Targaryen ALEX', PhoneNumber: '+345 6789012', role: 'Admin', Password: 'fireandblood' },
  { id: 5, FullName: 'Baratheon OLIVIA', PhoneNumber: '+567 8901234', role: 'User', Password: 'stagking' },
  { id: 6, FullName: 'Greyjoy SOPHIA', PhoneNumber: '+234 5678901', role: 'User', Password: 'ironborn' },
  { id: 7, FullName: 'Tyrell LIAM', PhoneNumber: '+876 5432109', role: 'Admin', Password: 'growingstrong' },
  { id: 8, FullName: 'Martell NOAH', PhoneNumber: '+123 9876543', role: 'User', Password: 'sunspear' },
  { id: 9, FullName: 'Bolton EMMA', PhoneNumber: '+890 1234567', role: 'User', Password: 'flayedman' },
  { id: 10, FullName: 'Mormont OLIVER', PhoneNumber: '+456 7890123', role: 'Admin', Password: 'bearisland' },
  { id: 11, FullName: 'Clegane AVA', PhoneNumber: '+789 0123456', role: 'User', Password: 'houseclegane' },
  { id: 12, FullName: 'Tarly ISABELLA', PhoneNumber: '+234 5678901', role: 'User', Password: 'hornsblow' },
  { id: 13, FullName: 'Hightower MIA', PhoneNumber: '+876 5432109', role: 'Admin', Password: 'oldtown' },
  { id: 14, FullName: 'Umber ETHAN', PhoneNumber: '+123 9876543', role: 'User', Password: 'giantsofthenorth' },
  { id: 15, FullName: 'Karstark AVERY', PhoneNumber: '+890 1234567', role: 'User', Password: 'karhold' },
  { id: 16, FullName: 'Manderly SOFIA', PhoneNumber: '+456 7890123', role: 'Admin', Password: 'theomore' },
  { id: 17, FullName: 'Seaworth LUCAS', PhoneNumber: '+789 0123456', role: 'User', Password: 'onionknight' },
  { id: 18, FullName: 'Glover HARPER', PhoneNumber: '+234 5678901', role: 'User', Password: 'deepwoodmotto' },
  { id: 19, FullName: 'Frey JACK', PhoneNumber: '+876 5432109', role: 'Admin', Password: 'crossing' },
  { id: 20, FullName: 'Arryn LUCY', PhoneNumber: '+123 9876543', role: 'User', Password: 'eyrie' },
  { id: 21, FullName: 'Tully AIDEN', PhoneNumber: '+890 1234567', role: 'User', Password: 'trout' },
  { id: 22, FullName: 'Blackwood BELLA', PhoneNumber: '+456 7890123', role: 'Admin', Password: 'raventree' },
  { id: 23, FullName: 'Bracken MATTHEW', PhoneNumber: '+789 0123456', role: 'User', Password: 'stonehedge' },
  { id: 24, FullName: 'Cerwyn EMILY', PhoneNumber: '+234 5678901', role: 'User', Password: 'cerwyn' },
  { id: 25, FullName: 'Connington LUNA', PhoneNumber: '+876 5432109', role: 'Admin', Password: 'griffin' },
  { id: 26, FullName: 'Dondarrion CHLOE', PhoneNumber: '+123 9876543', role: 'User', Password: 'lightninglord' },
  { id: 27, FullName: 'Florent CARTER', PhoneNumber: '+890 1234567', role: 'User', Password: 'fox' },
  { id: 28, FullName: 'Hornwood DAVID', PhoneNumber: '+456 7890123', role: 'Admin', Password: 'hornswood' },
  { id: 29, FullName: 'Kastark MADISON', PhoneNumber: '+789 0123456', role: 'User', Password: 'kastark' },
  { id: 30, FullName: 'Lefford ELLA', PhoneNumber: '+234 5678901', role: 'User', Password: 'golden' },

];
const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Ajouter Des Utilisateurs
      </Button>
    </GridToolbarContainer>
  );
}

function UsersList() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100, color : 'white ! important' },
    { field: 'FullName', headerName: 'Full Name', width: 300 },
    { field: 'email', headerName: 'Email',Type:'Email', width: 300 },
    { field: 'PhoneNumber', headerName: 'Phone Number',type:"number", width: 300 },

    {
      field: 'role',
      headerName: 'role',
      type: 'text',
      width: 300,
    },
    {
      field: 'Password',
      headerName: 'password',
      type: 'text',
      width: 300,
      editable: true
    },
  
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

     
return (
 

  <div style={{ height:'100%', width: '100%' ,}}>
  <h1 className='wewe'>Page de List des Utilisateurs</h1> 
  <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
      sx={{ color: 'white ! important' }}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
</div>

)
}

export default UsersList






