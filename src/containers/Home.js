import { Link } from 'react-router-dom';
import Login from '../components/Login';
import style from '../styles/Home.module.css';

const Home = () => (
  <div className={style.container}>
    <h1>Login</h1>
    <Login />
    <Link to="signup">Signup</Link>
  </div>
);
export default Home;
