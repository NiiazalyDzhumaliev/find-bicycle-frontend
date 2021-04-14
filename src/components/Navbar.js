import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleClick = () => {
    localStorage.removeItem('JWT');
  };
  return (
    <nav>
      <Link to="/favourites">Favourite</Link>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
