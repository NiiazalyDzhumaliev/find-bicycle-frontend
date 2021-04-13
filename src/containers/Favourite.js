import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import favouriteBicyclesAction from '../action/favourite.action';

const Favourite = () => {
  const dispatch = useDispatch();
  const bicycles = useSelector((state) => state.favourites.data);

  useEffect(() => {
    dispatch(favouriteBicyclesAction());
  }, []);
  return (
    <ul>
      {bicycles.map((bicycle) => (
        <button key={bicycle.id} type="button">
          {bicycle.model}
        </button>
      ))}
    </ul>
  );
};

export default Favourite;
