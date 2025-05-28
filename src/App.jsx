import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BaiTapToDoList from "./ToDoList/BaiTapToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <BaiTapToDoList />
    </>
  );
}

export default App;
