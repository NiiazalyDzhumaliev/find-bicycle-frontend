import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import loginAction from '../action/login.action';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    dispatch(loginAction(userLogin));
  };

  localStorage.setItem('JWT', state.token);

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <p>Dont have an account?</p>
        <Link to="/signup">Sign up</Link>
        {!_.isEmpty(state.token) ? (
          <Redirect to="/bicycles" />
        ) : (
          <p>Password or login invalid</p>
        )}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
