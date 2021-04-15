import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import {
  favouriteBicyclesAction,
  REMOVE_FAVOURITE,
} from '../action/favourite.action';
import Logout from '../components/Logout';

const Favourite = () => {
  const dispatch = useDispatch();
  const bicycles = useSelector((state) => state.favourites.data);

  const handleClick = (id) => {
    axios({
      url: 'http://localhost:3000/favourites',
      method: 'delete',
      data: { bicycle_id: id },
      headers: { Authorization: localStorage.getItem('JWT') },
    });
    dispatch(REMOVE_FAVOURITE(id));
  };

  const loggedIn = (token) => {
    if (token && token !== '') {
      return <Logout />;
    }
    return <Redirect to="/" />;
  };

  useEffect(() => {
    dispatch(favouriteBicyclesAction());
  }, []);
  return (
    <ul>
      <Link to="/bicycles">All Bicycles</Link>
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

export default Favourite;
