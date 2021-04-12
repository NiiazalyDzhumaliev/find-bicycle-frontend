import axios from 'axios';
import { useEffect, useState } from 'react';

const Favourite = () => {
  // const [favourite, setFavourite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://localhost:3000/favourites', {
          headers: {
            Authorization: localStorage.getItem('JWT'),
          },
        });
        // setFavourite(result);
        console.log(result);
      } catch (error) {
        setError(true);
        console.log('Unauthorized request');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{error ? 'Please login' : 'Your favourites'}</h1>
    </div>
  );
};

export default Favourite;
