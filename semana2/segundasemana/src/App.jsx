import { Effect } from "./components/Effect";
import { State } from "./components/State";
import { Ref } from "./components/Ref";
import './App.css';
import { Click } from "./components/EventClick";
import { Change } from "./components/EventChange";


function App() {

  return (
    <div className="App">
      <h1>Events</h1>
      <div className="events">
        <Click/>
        <Change/>
      </div>
      <h1>React Hooks</h1>
      <div className="hooks">
        <State/>
        <Ref/>
        <Effect/>
      </div>

    </div>
    );
}

export default App
