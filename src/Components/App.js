import { useState, useEffect } from "react";
import Aos from "aos";
import Header from "./Header.js";
import Presentation from "./Presentation.js";
import Projects from "./Projects";
import Top from "./Top";
import Skills from "./Skills.js";
import "../Assets/CSS/App.scss";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  const [isOpen, setIsOpen] = useState(false);

  /* const [contactInformations, setContactInformations] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  }); */

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Top />
      <Presentation />
      <Skills />
      <Projects />
      {/* <Footer
        contactInformations={contactInformations}
        setContactInformations={setContactInformations}
      /> */}
    </div>
  );
}
