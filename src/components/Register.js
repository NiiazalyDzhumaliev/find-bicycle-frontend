import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import signupAction from '../action/signup.action';

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.signup.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(signupAction(newUser));
  };
  localStorage.setItem('JWT', token);

  return (
    <div>
      <h1>Sign up page</h1>
      <div>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
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
        <label htmlFor="display-name">
          Display name
          <input
            type="text"
            id="display-name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
