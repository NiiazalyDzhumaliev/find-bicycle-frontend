import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../action/login.action';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.removeItem('JWT');
    dispatch(LOGOUT());
    history.push('/');
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
