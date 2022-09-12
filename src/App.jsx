// import { useState } from "react";
import "./App.css";
const SERVER = import.meta.env.VITE_SERVER;

fetch(SERVER)
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Holidays</h1>
    </div>
  );
}

export default App;
