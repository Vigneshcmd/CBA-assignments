import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default Header;
