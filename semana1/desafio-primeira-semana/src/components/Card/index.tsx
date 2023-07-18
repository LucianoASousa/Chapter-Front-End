import { useRef } from "react";
import "./style.css"
import { RiDeleteBin5Fill } from "react-icons/ri"

interface cardProps{
  task: string;
  deleteTask: () => void;
}

export function Card({task, deleteTask} : cardProps){
  const ref = useRef<HTMLHeadingElement>(null);

  function handleCheckbox(){
    if(ref.current?.style.textDecoration === "line-through"){
      ref.current.style.textDecoration = "none";
    }else{
      ref.current?.style.setProperty("text-decoration", "line-through");
    }
  }

  return(
    <div className="card">
      <div className="card-check">
        <input type="checkbox" onChange={handleCheckbox}/>
        <h3 ref={ref}>{task}</h3>
      </div>
      <RiDeleteBin5Fill onClick={deleteTask} className="bin"/>
    </div>
  )
}