import './style.css'

export function Click() {

  function handleClick(){
    alert('Você clicou no botão') 
  }

  return (
    <div className="click">
      <h1>EVENT CLICK</h1>
      <button onClick={handleClick}>ALERTA</button>
    </div>
  );
}