import React from 'react';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


const DtTable = ({ columns, data }) => {
  const tableData = {
    columns,
    data
  };

  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          sortIcon="↕️"
          defaultSortAsc={true}
          pagination
          highlightOnHover
          dense
        />
        
      </DataTableExtensions>
    </div>
  );
};

export default DtTable;