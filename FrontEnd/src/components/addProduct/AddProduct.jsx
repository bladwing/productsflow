import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./addProducts.scss";

export default function AddProduct() {
  const form = useRef(null);
  const [DVD, setShowDVD] = useState(false);
  const [Book, setShowBook] = useState(false);
  const [Furniture, setShowFurniture] = useState(false);

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [Products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [sizeError, setSizeError] = useState(false);
  const [weightError, setweightError] = useState(false);
  const [dimensionsError, setdimensionsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const inputs = { name, sku, price, size, weight, height, width, length };
    const skuChecker = Products.some((products) => products.sku === sku);
 
    Book === true && weight === null
      ? setError("Weight value, cannot be empty") || setweightError(true)
      : DVD === true && size === null
      ? setError("Size value, cannot be empty") || setSizeError(true)
      : Furniture === true &&
        (width === null || length === null || height === null)
      ? setError("Dimensions value's, cannot be empty") ||
        setdimensionsError(true)
      : skuChecker
      ? setError("SKU is exist, please input another") ||
        setweightError(false) ||
        setSizeError(false) ||
        setdimensionsError(false)
        
      : await axios
          .post("http://localhost:5000/products", inputs)
          .then(function () {
            setError("");
            setSku("");
            setName("");
            setPrice("");
            setSize(null);
            setWeight(null);
            setWidth(null);
            setHeight(null);
            setLength(null);
            setShowBook(false);
            setShowDVD(false);
            setShowFurniture(false);
            form.current.reset();
            navigate("/");
          });
  };

  const HandleSelectType = (e) => {
    const BookValue = e.target.value;
    const DVDvalue = e.target.value;
    const FurnitureValue = e.target.value;

    BookValue === "Book" ? setShowBook(true) : setShowBook(false);
    DVDvalue === "DVD" ? setShowDVD(true) : setShowDVD(false);
    FurnitureValue === "Furniture"
      ? setShowFurniture(true)
      : setShowFurniture(false) ||
        setWeight(null) ||
        setHeight(null) ||
        setLength(null);
  };

  return (
    <div className="addProductContainer">
      <div className="product_form">
        <div id="message" className="message">
          {error}
        </div>
        <form onSubmit={HandleSubmit} id="product_form" ref={form}>
          <table cellSpacing="10" className="mainTable">
            <tbody>
              <tr>
                <th>
                  <label>SKU: </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="sku"
                    placeholder="JVC200123"
                    onChange={(e) => setSku(e.target.value)}
                    id="sku"
                    className="form-control form-control-color"
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Name: </label>
                </th>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Acme DISK"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Price ($): </label>
                </th>
                <td>
                  <input
                    type="number"
                    name="price"
                    placeholder="1.00"
                    onChange={(e) => setPrice(e.target.value)}
                    id="price"
                    className="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Select Type </label>
                </th>
                <td>
                  <select
                    id="productType"
                    onChange={HandleSelectType}
                    className="form-control"
                    required
                  >
                    <option value="">Choose type</option>
                    <option value="DVD">DVD-disk</option>
                    <option value="Book">Book</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="AditionalContainer">
            <table
              id="divDisk"
              className="divDisk"
              name="DVD"
              style={{ display: DVD ? "block" : "none" }}
            >
              <tbody>
                <tr>
                  <th>
                    <label>Size</label>
                  </th>
                  <td>
                    <input
                      id="size"
                      placeholder="MB"
                      onChange={(e) => setSize(e.target.value)}
                      type="number"
                      name="size"
                      className="form-control"
                      style={{
                        border: sizeError === true ? "1px solid red" : "",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <h6>Please, provide size</h6>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              id="divBook"
              className="divBook"
              name="Book"
              style={{ display: Book ? "block" : "none" }}
            >
              <tbody>
                <tr>
                  <th>
                    <label>Weight</label>
                  </th>
                  <td>
                    <input
                      id="weight"
                      placeholder="Kg"
                      onChange={(e) => setWeight(e.target.value)}
                      type="number"
                      name="Weight"
                      className="form-control"
                      style={{
                        border: weightError === true ? "1px solid red" : "",
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <th></th>
                  <td>
                    <h6>Please, provide weight</h6>
                  </td>
                </tr>
              </tbody>
            </table>

            <table
              cellSpacing="10"
              className="divFurniture"
              id="divFurniture"
              name="Furniture"
              style={{ display: Furniture ? "block" : "none" }}
            >
              <tbody>
                <tr>
                  <th>
                    <label>Height</label>
                  </th>

                  <td>
                    <input
                      id="height"
                      placeholder="SM"
                      onChange={(e) => setHeight(e.target.value)}
                      type="number"
                      name="height"
                      className="form-control"
                      style={{
                        border: dimensionsError === true ? "1px solid red" : "",
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>Width</label>
                  </th>
                  <td>
                    <input
                      id="width"
                      placeholder="SM"
                      onChange={(e) => setWidth(e.target.value)}
                      type="number"
                      name="width"
                      className="form-control"
                      style={{
                        border: dimensionsError === true ? "1px solid red" : "",
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <th>
                    <label>Length</label>
                  </th>
                  <td>
                    <input
                      id="length"
                      placeholder="SM"
                      onChange={(e) => setLength(e.target.value)}
                      type="number"
                      name="length"
                      className="form-control"
                      style={{
                        border: dimensionsError === true ? "1px solid red" : "",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td>
                    <h6>Please, provide dimensions</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="addPageButton">
            <button className="btn btn-primary btn-sm m-2">Save</button>
            <Link to="/" className=" btn btn-danger btn-sm m-2">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
