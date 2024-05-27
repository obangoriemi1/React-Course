import { useState } from "react";


function TodoList(){
    const [tasks, setTask] = useState(["Walk the dog", "Go to the gym", "Play football"])
    const [newTask, setNewTask] = useState("")
       function handleInputChange(event){
           setNewTask(event.target.value)
       }
       
       function AddTask(){
          if(newTask.trim() !== ""){
            setTask([...tasks, newTask])
            setNewTask("")
          }
       }

       function DeleteTask(index){
          const updatedTasks = tasks.filter((element, i) => i !== index)
          setTask(updatedTasks)
       }
       function MoveTaskUp(index){
           if(index > 0){
              const updatedTasks = [...tasks];
               [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
               setTask(updatedTasks)
              
           }
       }
       function MoveTaskDown(index){
             if(index < tasks.length - 1){
              const updatedTasks = [...tasks];
               [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
               setTask(updatedTasks)
              
           }
       }

   
return(
    <div className="container">
         <h1>To Do List</h1>
         <div className="todo-container">
           
             <input autoComplete="off" placeholder="Enter New Task" type="text" id="todo-input" value={newTask} onChange={handleInputChange}></input>
             <button className="add-btn" onClick={AddTask}>Add Task</button>
         </div>
         <ol>
            {tasks.map((task, index) => <li key={index}>
                 <span className="text">{task}</span>
                 <button className="delete" onClick={() => DeleteTask(index)}>delete</button>
                 <button className="up" onClick={() => MoveTaskUp(index)}>Up</button>
                 <button className="down" onClick={() => MoveTaskDown(index)}>Down</button>

            </li>)}
         </ol>
    </div>
)

}

export default TodoList