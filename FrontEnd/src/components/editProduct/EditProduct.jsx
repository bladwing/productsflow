import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sku, setSku] = useState("");
  const [size, setSize] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
    async function getProductById() {
      const response = await axios.get(
        `http://localhost:5000/products/${id}`
      );
      setName(response.data.name);
      setPrice(response.data.price);
      setSku(response.data.sku);
      setSize(response.data.size);
      setWeight(response.data.weight);
      setHeight(response.data.height);
      setWidth(response.data.width);
      setLength(response.data.length);
    }
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      name: name,
      price: price,
      size: size,
      weight: weight,
      height: height,
      width: width,
      length: length,
    });
    navigate("/");
  };

  return (
    <div className="addProductContainer">
      <form onSubmit={updateProduct} className="product_form">
        <table cellSpacing="10" className="mainTable">
          <tbody>
            <tr>
              <th>
                <label>SKU: </label>
              </th>
              <td>{sku}</td>
            </tr>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label>Price ($): </label>
              </th>
              <td>
                <input
                  className="input"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>

            {size !== null ? (
              <tr>
                <th>
                  <label>Size: </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="number"
                    placeholder="Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </td>
              </tr>
            ) : (
              []
            )}
            {weight !== null ? (
              <tr>
                <th>
                  <label>Weight: </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="number"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </td>
              </tr>
            ) : (
              []
            )}

            {height !== null ? (
              <tr>
                <th>
                  <label>Height: </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="number"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </td>
              </tr>
            ) : (
              []
            )}
            {width !== null ? (
              <tr>
                <th>
                  <label>Width: </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="number"
                    placeholder="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </td>
              </tr>
            ) : (
              []
            )}
            {length !== null ? (
              <tr>
                <th>
                  <label>Length: </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="number"
                    placeholder="Length"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </td>
              </tr>
            ) : (
              []
            )}
          </tbody>
        </table>

        <div className="addPageButton">
          <button className="btn btn-primary btn-sm m-2">Update</button>
          <Link to="/" className="btn btn-danger btn-sm m-2">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
