import { useState } from "react";
import './style.css'

export function State() {
  const [name, setName] = useState('');

  function handleClick(){
    switch (name) {
      case 'João':
        setName('Maria');
        break;
      case 'Maria':
        setName('Pedro');
        break;
      case 'Pedro':
        setName('João');
        break;
      default:
        setName('João');
        break;
    }
  }

  return (
    <div className="state">
      <h1>HOOK STATE</h1>
      <button onClick={handleClick}>Mudar nome</button>
      <h3>{`Meu nome é : ${name}`}</h3>
    </div>
  );
}