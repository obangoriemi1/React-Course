import { useState } from "react";

function ListUpdates(){
   const [tasks, setTasks] = useState([])


   function AddTask(){
    const newTask = document.getElementById("taskInput").value;
    document.getElementById("taskInput").value = ""
    if(newTask.trim() !== ""){
        setTasks([...tasks, newTask])
    }
   
   }

   function DeleteTask(index){
    setTasks(tasks.filter((task, i) => i !== index))

   }

   return(
    <div className="cont">
        <h1>To Do List</h1>
        <p>Hint: click on the task you want to delete</p>
        <div>
        <input placeholder="Enter your task..." id="taskInput" type="text"/>
        <button onClick={AddTask}>Add Task</button>

        <ol>
            {tasks.map((task, index) => <li key={index} onClick={() => DeleteTask(index)}>
                {task}
            </li>)}
        </ol>
        </div>
    </div>
   )


}

export default ListUpdates