import "./style.css"
import { useState } from "react";
import { Card } from "../Card"
import { AiFillCheckCircle } from "react-icons/ai";

interface cardProps{
  task: string;
}

export function Tasks() {
  const [list, setList] = useState<cardProps[]>([]);
  const [task, setTask] = useState("");

  function addTask(){
    const data = {
      task: task
    }
    if(task === ""){
      alert("Por favor, digite uma tarefa");
      return;
    }
    setList([...list , data]);
  }

  function deleteTask(index: number){
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  }


  return (
    <div className="task-container">
      <div className="task-action">
      <h2>Minhas tasks</h2>
        <div className="task-input">
          <input type="text" onChange={(e) => setTask(e.target.value)} defaultValue={task} placeholder="Adicionar novo Todo"/>
          <AiFillCheckCircle onClick={addTask} className="submit"/>
        </div>
      </div>
      <div className="task-items">
        {list?.map((item, index) => (
          <div key={index} >
            <Card task={item.task} deleteTask={()=>deleteTask(index)}/>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}