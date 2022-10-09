import { useState, useEffect } from "react";
import Aos from "aos";
import Header from "./Header.js";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Skills from "./Skills.js";
import "../Assets/CSS/App.css";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Projects />
      <Skills />
      <Contacts />
    </div>
  );
}
