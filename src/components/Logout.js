const Logout = () => {
  const handleClick = () => {
    localStorage.removeItem('JWT');
  };
  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
};
export default Logout;
