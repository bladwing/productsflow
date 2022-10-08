import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFoundContainer">
      <h1>Page Not found</h1>
      <img src="img/404.jpg" alt="404" />
      <h3>
        Please back to <Link to="/">Main Page</Link>
      </h3>
    </div>
  );
};

export default PageNotFound;
