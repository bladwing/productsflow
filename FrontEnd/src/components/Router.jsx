import { Routes, Route } from "react-router-dom";
import EditProduct from "../pages/EditProduct";
import AddProduct from "../pages/AddProduct";
import Products from "../pages/Products";
import PageNotFound from "../pages/PageNotFound";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouterComponent;
