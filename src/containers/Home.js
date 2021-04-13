import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bicyclesAction from '../action/bicycles.action';

const Home = () => {
  const dispatch = useDispatch();
  const bicycles = useSelector((state) => state.bicycles.data);

  useEffect(() => {
    dispatch(bicyclesAction());
  }, []);
  return (
    <ul>
      {bicycles.map((bicycle) => (
        <li key={bicycle.id}>
          <p>{bicycle.model}</p>
        </li>
      ))}
    </ul>
  );
};

export default Home;
