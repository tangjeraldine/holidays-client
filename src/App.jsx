// import { useState } from "react";
import "./App.css";

fetch("https://fair-pear-cricket-ring.cyclic.app/")
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
