import Todo from "./pages/Todo"
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  )
}