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

import './factures.css'
import { Add, AddAlarm, Update } from '@mui/icons-material';
const initialRows = [
  { "id": 1, "creation_date": "2021-05-12", "total_price": "$20", "payment_method": "credit card", "order_id": "123456789" },
  { "id": 2, "creation_date": "2022-02-28", "total_price": "$35", "payment_method": "paypal", "order_id": "987654321" },
  { "id": 3, "creation_date": "2020-11-15", "total_price": "$50", "payment_method": "cash", "order_id": "543216789" },
  { "id": 4, "creation_date": "2023-01-10", "total_price": "$15", "payment_method": "credit card", "order_id": "987123456" },
  { "id": 5, "creation_date": "2021-08-05", "total_price": "$8", "payment_method": "paypal", "order_id": "567891234" },
  { "id": 6, "creation_date": "2019-06-20", "total_price": "$30", "payment_method": "cash", "order_id": "234567891" },
  { "id": 7, "creation_date": "2022-09-17", "total_price": "$12", "payment_method": "credit card", "order_id": "891234567" },
  { "id": 8, "creation_date": "2020-04-02", "total_price": "$25", "payment_method": "paypal", "order_id": "456789123" },
  { "id": 9, "creation_date": "2023-03-30", "total_price": "$40", "payment_method": "cash", "order_id": "123456789" },
  { "id": 10, "creation_date": "2021-12-25", "total_price": "$10", "payment_method": "credit card", "order_id": "987654321" },
  { "id": 11, "creation_date": "2022-07-22", "total_price": "$5", "payment_method": "paypal", "order_id": "543216789" },
  { "id": 12, "creation_date": "2020-10-18", "total_price": "$20", "payment_method": "cash", "order_id": "987123456" },
  { "id": 13, "creation_date": "2023-11-13", "total_price": "$15", "payment_method": "credit card", "order_id": "567891234" },
  { "id": 14, "creation_date": "2021-02-08", "total_price": "$30", "payment_method": "paypal", "order_id": "234567891" },
  { "id": 15, "creation_date": "2019-09-03", "total_price": "$8", "payment_method": "cash", "order_id": "891234567" },
  { "id": 16, "creation_date": "2022-05-01", "total_price": "$25", "payment_method": "credit card", "order_id": "456789123" },
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
        Ajouter Facture
      </Button>
    </GridToolbarContainer>
  );
}

function FacturesList() {
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
    { field: 'id', headerName: 'ID', width: 100 },
  { field: 'creation_date', headerName: 'Creation date', width: 250,editable: true },
  { field: 'total_price', headerName: 'Total Prix',type:"number", width: 250 , editable: true},

  {
    field: 'payment_method',
    headerName: 'methode de paiement',
    width: 250,
    editable: true,
  },
  {
    field: 'creation_date',
    headerName: 'date de creation de commande ',
    type: 'text',
    width: 250,
    editable: true,
  },
  {
    field: 'order_id',
    headerName: 'Id de la commande',
    type: 'number',
    width: 250,
    editable: true,
    
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
  <h1 className='wewe'>Page de List des Factures</h1> 
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

export default FacturesList






