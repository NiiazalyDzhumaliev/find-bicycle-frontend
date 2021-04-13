import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import bicyclesAction from '../action/bicycles.action';

const Home = () => {
  const dispatch = useDispatch();
  const bicycles = useSelector((state) => state.bicycles.data);

  const handleClick = (id) => {
    try {
      axios.post(
        'http://localhost:3000/favourites',
        {
          bicycle_id: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem('JWT'),
          },
        },
      );
    } catch (error) {
      console.log('something is wrong');
    }
  };

  useEffect(() => {
    dispatch(bicyclesAction());
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

export default Home;
