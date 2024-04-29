// eslint-disable-next-line no-unused-vars
import react from "react";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Service from "./Components/Services/Service";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
