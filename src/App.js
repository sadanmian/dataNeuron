import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Add from "./Components/Add";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function App() {
  const [visible, setVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  return (
    <PrimeReactProvider>
      <div className="flex flex-column gap-3">
        {/* Button */}
        <div className="flex gap-5">
          <Button
            onClick={() => setVisible(true)}
            label="Add"
            severity="success"
          />
          <Button
            onClick={() => setUpdateVisible(true)}
            label="Update"
            severity="info"
          />
        </div>
        {/* Add Dialog */}
        <Dialog
          header="Add"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          ...
        </Dialog>
        {/* Update Dialog */}
        <Dialog
          header="Update"
          visible={updateVisible}
          style={{ width: "50vw" }}
          onHide={() => setUpdateVisible(false)}
        >
          ...
        </Dialog>
        {/* DataTable */}
        <DataTable value={[1, 2, 3, 4]} tableStyle={{ minWidth: "50rem" }}>
          <Column body={(rowData) => <div>...</div>} header="First"></Column>
          <Column body={(rowData) => <div>...</div>} header="Name"></Column>
          <Column body={(rowData) => <div>...</div>} header="Position"></Column>
          <Column body={(rowData) => <div>...</div>} header="Address"></Column>
        </DataTable>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
