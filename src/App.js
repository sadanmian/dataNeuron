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
  const [execution, setExecution] = useState({});
  console.log(execution);

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
          <Add
            execution={execution}
            data={data}
            setData={setData}
            setCounter={setCounter}
            setExecution={setExecution}
          />
          <Update
            execution={execution}
            data={data}
            setData={setData}
            setCounter={setCounter}
            setExecution={setExecution}
          />
        </div>
        <TableData
          data={data}
          setData={setData}
          setExecution={setExecution}
          execution={execution}
        />
        <div className="flex justify-content-between">
          {/* API Call Count */}
          <div className="flex flex-column gap-2">
            <div className="flex gap-2 align-items-center">
              API call of Add:
              <Tag severity="warning" value={counter[0]?.count}></Tag>
            </div>
            <div className="flex gap-2 align-items-center">
              API call of Update:
              <Tag severity="warning" value={counter[1]?.count}></Tag>
            </div>
          </div>
          {/* Execution Time */}
          <div className="flex flex-column gap-2">
            <div className="flex gap-2 align-items-center">
              Execution Time for Add:
              <Tag
                severity="warning"
                value={(execution?.add?.toFixed(2) || 0) + " ms"}
              ></Tag>
            </div>
            <div className="flex gap-2 align-items-center">
              Execution Time for Update:
              <Tag
                severity="warning"
                value={(execution?.update?.toFixed(2) || 0) + " ms"}
              ></Tag>
            </div>
            <div className="flex gap-2 align-items-center">
              Execution Time for Get:
              <Tag
                severity="warning"
                value={(execution?.get?.toFixed(2) || 0) + " ms"}
              ></Tag>
            </div>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
