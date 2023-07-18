import { Tasks } from "../../components/Tasks";
import "./style.css";

function Todo() {
  return (
    <main>
      <div className="blue-div">
        <h1>to.<span>do</span></h1>
        <Tasks />
      </div>
    </main>
  )
}

export default Todo;