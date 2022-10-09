import { useState, useEffect } from "react";
import Aos from "aos";
import Header from "./Header.js";
import Projects from "./Projects";
import Footer from "./Footer";
import Skills from "./Skills.js";
import "../Assets/CSS/App.scss";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  const [isOpen, setIsOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactInformations, setContactInformations] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });

  return (
    <div className="App">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Projects />
      <Skills />
      <Footer
        contactInformations={contactInformations}
        setContactInformations={setContactInformations}
        name={name}
        setName={setName}
        firstname={firstname}
        setFirstname={setFirstname}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
}
