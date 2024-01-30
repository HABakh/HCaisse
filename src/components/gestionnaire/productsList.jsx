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

import './productsList.css'
import { Add, AddAlarm, Update } from '@mui/icons-material';
const initialRows = [
  { id: 1, Name: 'Vanila Ice Cream', Price: '4.50$', TVA: '24244612461466', Creation_date: '2023-07-30', Category: 'dessert' },
  { id: 2, Name: 'Chocolate Cake', Price: '$7.99', TVA: '123456789', Creation_date: '2021-05-12',Category: 'dessert' },
  { id: 3, Name: 'Pepperoni Pizza', Price: '$10.99', TVA: '987654321', Creation_date: '2022-08-05',Category: 'main course' },
  { id: 4, Name: 'Caesar Salad', Price: '$6.25', TVA: '789123456', Creation_date: '2023-01-20',Category: 'appetizer' },
  { id: 5, Name: 'Vanila Ice Cream', Price: '4.50$', TVA: '15515126', Creation_date: '2023-07-30', Category: 'dessert' },
  { id: 6, Name: 'Chocolate Cake', Price: '$7.99', TVA: '123456789', Creation_date: '2021-05-12',Category: 'dessert' },
  { id: 7, Name: 'Pepperoni Pizza', Price: '$10.99', TVA: '987654321', Creation_date: '2022-08-05',Category: 'main course' },
  { id: 8, Name: 'Caesar Salad', Price: '$6.25', TVA: '789123456', Creation_date: '2023-01-20',Category: 'appetizer' },
  { id: 9, Name: 'Vanila Ice Cream', Price: '4.50$', TVA: '131313114', Creation_date: '2023-07-30', Category: 'dessert' },
  { id: 10, Name: 'Chocolate Cake', Price: '$7.99', TVA: '123456789', Creation_date: '2021-05-12',Category: 'dessert' },  
];
const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', Price: '',TVA:'',DateCreation:'',Category:'', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Ajouter des Produits
      </Button>
    </GridToolbarContainer>
  );
}

function ProductsList() {

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
    { field: 'id', headerName: 'ID', width: 100 ,       editable: true,
  },
    { field: 'Name', headerName: 'Name',type:"text", width: 200 , editable: true,},
    { field: 'Price', headerName: 'Price',type:"number", width: 200,       editable: true },
  
    {
      field: 'TVA',
      headerName: 'TVA',
      type: 'number',
      width: 200,     editable: true
    },
    {
      field: 'Creation_date',
      headerName: 'Creation Date',
      type: 'text',
      width: 200, editable: true
    },
    {
      field: 'Category',
      headerName: 'Category',
      type: 'text',
      width:400, editable: true
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
            color="white"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="white"
          />,
        ];
      },
    },
  ];

     
return (
 

  <div style={{ height:'100%', width: '100%' ,}}>
  <h1 className='wewe'>Page de List des Produits</h1> 
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

export default ProductsList