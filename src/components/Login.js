import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/Login.module.css';

import { loginAction } from '../action/login.action';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);

  if (state.token !== '') {
    return <Redirect to="/bicycles" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    dispatch(loginAction(userLogin));
  };

  return (
    <form className={style.form_container} onSubmit={(e) => handleSubmit(e)}>
      <label className={style.form_label} htmlFor="email">
        Email:
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={style.form_label} htmlFor="password">
        Password:
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
