import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem('JWT');
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
