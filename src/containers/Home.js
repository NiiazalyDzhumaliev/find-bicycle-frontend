import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home page</h1>

    <Link to="signup">Sign up</Link>
    <Link to="login">Login</Link>
  </div>
);
export default Home;
