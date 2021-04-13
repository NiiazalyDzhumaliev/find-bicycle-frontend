import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import signupAction from '../action/signup.action';

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [passwordCheck, setPasswordCheck] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.signup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(signupAction(newUser));
    localStorage.setItem('JWT', token);
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
        {/* <label htmlFor="password-confirmation">
          Password Confirm
          <input
            type="password"
            id="password-confirmation"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </label> */}
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
