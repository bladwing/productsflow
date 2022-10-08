import express from "express";
import { getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteProducts } from "./controllers/Products.js";
  
  const router = express.Router();
  
router.get("/", (req, res) => {
  res.render('pages/main');
});


router.get('/products/', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/delteById/:id', deleteProduct);
router.delete('/products/deleteByIds/:ids', deleteProducts);


export default router;
