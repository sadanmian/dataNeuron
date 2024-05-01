import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Add from "./Components/Add";
import Update from "./Components/Update";
import TableData from "./Components/TableData";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/counter")
      .then((res) => {
        setCounter(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <PrimeReactProvider>
      <div className="flex flex-column gap-3">
        {/* Button */}
        <div className="flex gap-5">
          <Add data={data} setData={setData} setCounter={setCounter} />
          <Update data={data} setData={setData} setCounter={setCounter} />
        </div>
        <TableData data={data} setData={setData} />
        {counter[0]?.count}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
