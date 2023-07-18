import { useRef } from "react";
import './style.css'

export function Ref() {
  const ref = useRef(null);

  function handleChange(e){
    ref.current.style.backgroundColor = e.target.value;
  }

  return (
    <div className="ref">
      <h1>HOOK REF</h1>
      <input type="text" placeholder="Mudar a Cor" onChange={handleChange}/>
      <div ref={ref} className="color"></div>
    </div>
  );
}