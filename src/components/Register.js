import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupAction } from '../action/signup.action';
import style from '../styles/Register.module.css';

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(signupAction(newUser));
  };

  return (
    <form className={style.form_container} onSubmit={handleSubmit}>
      <label className={style.form_label} htmlFor="email">
        Email:
        {' '}
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={style.form_label} htmlFor="password">
        Password:
        {' '}
        <br />
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className={style.form_label} htmlFor="display-name">
        Display name:
        {' '}
        <br />
        <input
          type="text"
          id="display-name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Register;
