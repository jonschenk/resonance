import About from "./components/About/About";
import Artists from "./components/Artists/Artists";
import Divider from "./components/Divider/Divider";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Title />
        <Divider size="large" />
        <Artists />
        <About />
      </Router>
    </>
  );
}

export default App;
