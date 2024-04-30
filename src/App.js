import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Add from "./Components/Add";
import Update from "./Components/Update";
import TableData from "./Components/TableData";

function App() {
  return (
    <PrimeReactProvider>
      <div className="flex flex-column gap-3">
        {/* Button */}
        <div className="flex gap-5">
          <Add />
          <Update />
        </div>
        <TableData />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
