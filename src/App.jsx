import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import Tech from "./components/Tech";
import WorkExp from "./components/WorkExp";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <About />
      <Tech />
      <WorkExp />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
