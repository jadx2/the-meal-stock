import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">The Meal Stock</h1>
    <Link className="to-home" to="/">
      Home
    </Link>
  </nav>
);

export default Navbar;
