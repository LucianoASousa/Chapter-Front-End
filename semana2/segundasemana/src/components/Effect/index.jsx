import { useState, useEffect } from "react";
import './style.css'

export function Effect() {
  const [count , setCount] = useState(0);

  useEffect(() => {
    if(count%2 === 0){
      document.title = `Você clicou ${count} vezes`;
    }
  }, [count])

  return (
    <div className="effect">
      <h1>HOOK EFFECT</h1>
      <button onClick={()=> setCount(count + 1)}>Incrementar</button>
      <h3>{count}</h3>
      <p>OBS: O título da página só será alterado se o número for par</p>
    </div>
  );
}