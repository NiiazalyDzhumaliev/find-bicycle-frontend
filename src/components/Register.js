import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name,
        email,
        password,
        passwordCheck,
      };
      const response = await axios.post(
        'http://localhost:3000/signup',
        newUser,
      );
      console.log(response);
    } catch (error) {
      console.log('Something is wrong');
    }
  };
  return (
    <div>
      <h1>Register</h1>
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
        <label htmlFor="password-confirmation">
          Password Confirm
          <input
            type="password"
            id="password-confirmation"
            onChange={(e) => setPasswordCheck(e.target.value)}
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
