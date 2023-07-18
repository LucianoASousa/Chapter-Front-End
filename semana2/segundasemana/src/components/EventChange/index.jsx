import './style.css'

export function Change() {

  function handleChange(e){
    console.log(e.target.value)
  }

  return (
    <div className="change">
      <h1>EVENT CHANGE</h1>
      <input type="text" onChange={handleChange} placeholder="nome"/>
      <p>OBS: Abra o console para ver o efeito</p>
    </div>
  );
}