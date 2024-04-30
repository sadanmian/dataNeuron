import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";

function TableData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
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
