import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./productlist.scss";

export default function ProductList() {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      return getProducts();
    }, 1000);
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      "http://localhost:5000/products"
    );
    setLoading(false);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    await axios
      .delete(`http://localhost:5000/products/delteById/${id}`)
      .then(function () {
        getProducts();
      });
  };

  const deleteProductsByIds = () => {
    const ids = [];
    Products.forEach((product) => {
      if (product.select) {
        ids.push(product.id);
      }
    });
    ids.length === 0
      ? console.log("Have no one selected Product")
      : axios
          .delete(
            `http://localhost:5000/products/deleteByIds/${ids}`
          )
          .then(() => {
            getProducts();
          });
  };

  return (
    <div>
      <div className="TopContainer">
        <h4 className="PageTitle"> Products List</h4>
        <div className="ButtonContainer">
          <Link to="/addproduct" className="btn btn-primary btn-sm m-2">
            ADD
          </Link>
          <button
            onClick={() => {
              deleteProductsByIds();
            }}
            className="btn btn-danger btn-sm m-2"
          >
            MASS DELETE
          </button>
        </div>
      </div>

      <div className="productContainer">
        {Loading ? (
          <div className="loader-container ">
            <div className="spinner"></div>
          </div>
        ) : Products.length === 0 ? (
          <div className="listEmptyContainer">
            <h3>Product list is empty</h3>
            <img src="./img/listEmpty.png" alt="listEmpty" />
          </div>
        ) : (
          Products.map((product) => (
            <div key={product.id} className="productCard" id="product">
              <div className="cardItem">
                <input
                  type="checkbox"
                  className="delete-checkbox"
                  value={product.id}
                  onChange={(e) => {
                    setProducts(
                      Products.map((check) => {
                        const value = e.target.checked;
                        if (check.id === product.id) {
                          check.select = value;
                        }
                        return check;
                      })
                    );
                  }}
                />

                {product.sku}
              </div>
              <div className="cardItem">{product.name}</div>
              <div className="cardItem">{product.price} $</div>
              <div className="cardItem, cardSpecifications" id="Dimensions">
                {product.width !== null ||
                product.length !== null ||
                product.height !== null ? (
                  <div className="cardSpecifications">
                    Dimensions: <br /> W x L x H<br />
                    {product.width} x {product.length} x {product.height}
                  </div>
                ) : (
                  []
                )}

                {product.weight !== null ? (
                  <div className="cardSpecifications">
                    Weight: {product.weight} KG
                  </div>
                ) : (
                  []
                )}
                {product.size !== null ? (
                  <div className="cardSpecifications">
                    Size: {product.size} MB
                  </div>
                ) : (
                  []
                )}
                <br />
              </div>

              <Link
                to={`editproduct/${product.id}`}
                className="btn btn-warning btn-sm m-2"
              >
                Update
              </Link>
              <button
                onClick={() => deleteProduct(product.id)}
                className="btn btn-danger btn-sm m-2"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
