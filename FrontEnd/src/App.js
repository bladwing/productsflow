import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Footer from "./components/footer";
import EditProduct from "./pages/EditProduct"
import PageNotFound from "./pages/PageNotFound"


import Logo from "./img/logo.png"

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Routes>
          <Route index element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:id" element={ <EditProduct />} />
          <Route path="/*" element={ <PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;




