import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";

function TableData({ data, setData, setExecution, execution }) {
  useEffect(() => {
    const a = performance.now().toFixed(2);
    axios
      .get("https://dataneuron-task2-backend.onrender.com/")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally((e) => {
        const b = performance.now().toFixed(2);
        setExecution({ ...execution, get: b - a });
      });
  }, []);

  return (
    <div>
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column field="firstName" header="First Name"></Column>
        <Column field="lastName" header="Last Name"></Column>
        <Column field="position" header="Position"></Column>
        <Column field="address" header="Address"></Column>
      </DataTable>
    </div>
  );
}

export default TableData;
