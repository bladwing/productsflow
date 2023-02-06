import { BrowserRouter, Link } from "react-router-dom";
import RouterComponent from "./components/Router"
import Footer from "./components/footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <img src="./img/logo.png" alt="logo" />
        </Link>
        <RouterComponent/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
