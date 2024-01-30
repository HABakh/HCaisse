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


import './commandesList.css'
import { Add, AddAlarm, Update } from '@mui/icons-material';




const initialRows = [
  { "id": 1, "quantity": 115, "order": "order-001", "product": "item-123" },
  { "id": 2, "quantity": 111, "order": "order-002", "product": "item-124" },
  { "id": 3, "quantity": 1, "order": "order-003", "product": "item-125" },
  { "id": 4, "quantity": 2, "order": "order-004", "product": "item-126" },
  { "id": 5, "quantity": 1, "order": "order-005", "product": "item-127" },
  { "id": 6, "quantity": 5, "order": "order-006", "product": "item-128" },
  { "id": 7, "quantity": 3, "order": "order-007", "product": "item-129" },
  { "id": 8, "quantity": 10, "order": "order-008", "product": "item-130" },
  { "id": 9, "quantity": 2, "order": "order-009", "product": "item-131" },
  { "id": 10, "quantity": 1, "order": "order-010", "product": "item-132" },
  { "id": 11, "quantity": 5, "order": "order-011", "product": "item-133" },
  { "id": 12, "quantity": 1, "order": "order-012", "product": "item-134" },
  { "id": 13, "quantity": 1, "order": "order-013", "product": "item-135" },
  { "id": 14, "quantity": 1, "order": "order-014", "product": "item-136" },
  { "id": 15, "quantity": 1, "order": "order-015", "product": "item-137" },
  { "id": 16, "quantity": 1, "order": "order-016", "product": "item-138" },
  { "id": 17, "quantity": 1, "order": "order-017", "product": "item-139" },
  { "id": 18, "quantity": 1, "order": "order-018", "product": "item-140" },
  { "id": 19, "quantity": 1, "order": "order-019", "product": "item-141" },
  { "id": 20, "quantity": 1, "order": "order-020", "product": "item-142" },
  { "id": 21, "quantity": 1, "order": "order-021", "product": "item-143" },
  { "id": 22, "quantity": 1, "order": "order-022", "product": "item-144" },
  { "id": 23, "quantity": 1, "order": "order-023", "product": "item-145" },
  { "id": 24, "quantity": 1, "order": "order-024", "product": "item-146" },
  { "id": 25, "quantity": 1, "order": "order-025", "product": "item-147" },
  { "id": 26, "quantity": 1, "order": "order-026", "product": "item-148" },
  { "id": 27, "quantity": 1, "order": "order-027", "product": "item-149" },
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
        Ajouter des Commandes
      </Button>
    </GridToolbarContainer>
  );
}

function CommandesList() {

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
    { field: 'id', headerName: 'ID', width: 100 , editable: true},
    { field: 'Quantity', headerName: 'Quantity', type : 'number',width: 300, editable: true },
    { field: 'order', headerName: 'Order', width: 300, editable: true },

    {
      field: 'product',
      headerName: 'Product',
      type: 'text',
      width: 300,
      editable: true,
    },
   


    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 480,
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
  <h1 className='wewe'>Page de List des Commande</h1> 
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

export default CommandesList;
