import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from '../action/login.action';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    dispatch(loginAction(userLogin));
  };
  localStorage.setItem('JWT', token);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
