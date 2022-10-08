import { useState } from "react";
import Header from "./Header.js";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
