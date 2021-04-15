import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import bicyclesAction from '../action/bicycles.action';
import Logout from '../components/Logout';

const Bicycle = () => {
  const dispatch = useDispatch();
  const bicycles = useSelector((state) => state.bicycles.data);

  const handleClick = (id) => {
    axios.post(
      'https://vast-hollows-37440.herokuapp.com/favourites',
      {
        bicycle_id: id,
      },
      {
        headers: {
          Authorization: localStorage.getItem('JWT'),
        },
      },
    );
  };

  const loggedIn = (token) => {
    if (token && token !== '') {
      return <Logout />;
    }
    return <Redirect to="/" />;
  };

  useEffect(() => {
    dispatch(bicyclesAction());
  }, []);
  return (
    <ul>
      <Link to="/favourites">Favourites</Link>
      {loggedIn(localStorage.getItem('JWT'))}
      {bicycles.map((bicycle) => (
        <button
          key={bicycle.id}
          type="button"
          onClick={() => handleClick(bicycle.id)}
        >
          {bicycle.model}
        </button>
      ))}
    </ul>
  );
};

export default Bicycle;
