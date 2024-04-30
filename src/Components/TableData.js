import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

function TableData() {
  return (
    <div>
      <DataTable value={[1, 2, 3, 4]} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="First Name"></Column>
        <Column field="code" header="Last Name"></Column>
        <Column field="code" header="Position"></Column>
        <Column field="code" header="Address"></Column>
      </DataTable>
    </div>
  );
}

export default TableData;
