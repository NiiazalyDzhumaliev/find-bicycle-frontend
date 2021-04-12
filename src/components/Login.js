import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [logged, setLogged] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userLogin = {
        email,
        password,
      };
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        userLogin,
      );
      // setLogged(true);
      console.log(response.data);
      history.push('/favourites');
      localStorage.setItem('JWT', response.data.auth_token);
    } catch (error) {
      console.log('User is not registered');
    }
  };

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
