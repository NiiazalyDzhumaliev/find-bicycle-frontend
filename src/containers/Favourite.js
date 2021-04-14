import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import favouriteBicyclesAction from '../action/favourite.action';

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
  };

  useEffect(() => {
    dispatch(favouriteBicyclesAction());
  }, []);
  return (
    <ul>
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
