import Header from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { Artists } from "./components/Artists/Artists";
import { About } from "./components/About/About";
import { Submit } from "./components/Submit/Submit";
import Footer from "./components/Footer/Footer";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Title />
        <Artists />
        <About />
        <Submit />
        <Footer />
      </Router>
    </>
  );
}

export default App;
