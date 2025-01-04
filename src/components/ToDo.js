import react, { useState } from "react";

const ToDo = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    const addTask = () =>{
        if(task.trim()){
            setList([...list,task])
            setTask('')
        }
        
    }

    const handleRemove = (i) => {
       const filteredList= list.filter((item,index)=> i!==index)
       console.log("filteredList", filteredList)
       setList(filteredList)
    }
    // console.log("Task", task)
    // console.log("List", list)
    return(
        <>
        <div className="flex justify-center">
            <h1> TO-DO List</h1>
        </div>
        <div className="flex justify-center">
            <input
                value={task}
                className="px-2"
                onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={addTask} className="bg-blue-500 text-white px-2 py-2 hover:bg-blue-600">ADD</button>
        </div>
        <div className="flex justify-center mt-4">
            <ul className="w-1/4">
            {list.map((item, i)=>(
                <li key={i} className="bg-gray-100 mb-2 p-2 rounded-lg flex items-center justify-between">
                    {item}
                    <div onClick={()=>handleRemove(i)} className=" cursor-pointer"> ❌</div>
                </li>

            ))}
            </ul>
        </div>
        
        </>
    )
}

export default ToDo