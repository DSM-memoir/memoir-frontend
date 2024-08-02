import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div onClick={() => setCount(count + 1)} className="text-red-500">
        {count}
      </div>
    </>
  );
}

export default App;
