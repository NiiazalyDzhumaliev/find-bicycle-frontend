import { Link } from 'react-router-dom';

const Navbar = () => {
  const fav = 'Favourites';
  return (
    <nav>
      <Link to="/favourites">{fav}</Link>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
