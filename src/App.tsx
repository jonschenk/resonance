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
        <Title className="snap-start" />
        <Artists className="snap-start" />

        <About className="snap-start" />
        <Submit className="snap-start" />
        <Footer />
      </Router>
    </>
  );
}

export default App;
