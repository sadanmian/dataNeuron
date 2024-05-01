import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Add from "./Components/Add";
import Update from "./Components/Update";
import TableData from "./Components/TableData";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tag } from "primereact/tag";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dataneuron-task2-backend.onrender.com/counter")
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
        <div className="flex gap-2 align-items-center">
          API call of Add:
          <Tag severity="warning" value={counter[0]?.count}></Tag>
        </div>
        <div className="flex gap-2 align-items-center">
          API call of Update:
          <Tag severity="warning" value={counter[1]?.count}></Tag>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
