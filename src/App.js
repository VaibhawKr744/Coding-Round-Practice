import { useState } from "react";
import StartRating from "./components/StarRating";
import StopWatch from "./components/StopWatch";
import Table from "./components/Table";
import ToDo from "./components/ToDo";

function App() {
  const [start, setStart] = useState(false)
  const [pause, setPause] = useState(false)
  const [stop, setStop] = useState(false)
  return (
    <div className="bg-gray-300 min-h-screen">
      
      {/* <StartRating/> */}
      {/* <Table/> */}
      {/* <StopWatch/> */}
      {/* <ToDo/> */}
      <div >
        <StopWatch start={start} pause={pause} stop={stop} setStart={setStart} setPause={setPause} setStop={setStop}/>
        <StopWatch start={start} pause={pause} stop={stop} setStart={setStart} setPause={setPause} setStop={setStop}/>
        <StopWatch start={start} pause={pause} stop={stop} setStart={setStart} setPause={setPause} setStop={setStop}/>
      </div>
      <div className="flex justify-center mt-4 ">
                <button className="bg-yellow-400 p-2 border border-blue-400 rounded-lg text-white mr-5" onClick={()=>setStart(true)}>Start All</button>
                <button className="bg-yellow-400 p-2 border border-blue-400 rounded-lg text-white mr-5" onClick={()=>setPause(true)}>Pause All</button>
                <button className="bg-yellow-400 p-2 border border-blue-400 rounded-lg text-white" onClick={()=>setStop(true)}>Stop All</button>

            </div>
    </div>
  );
}

export default App;