import { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import style from '../styles/Home.module.css';

const Home = () => {
  const [login, setLogin] = useState(true);
  const handleClick = () => {
    setLogin((prevLogin) => !prevLogin);
  };
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <h1 className={style.header}>{login ? 'Login' : 'Sign up'}</h1>
        {login ? <Login /> : <Register />}
        <button
          className={style.signup_login}
          type="button"
          onClick={handleClick}
        >
          {login ? 'Sign up' : 'Login'}
        </button>
      </div>
    </div>
  );
};
export default Home;
