import axios from 'axios';
import { useEffect, useState } from 'react';

const Favourite = () => {
  const [favourite, setFavourite] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/favourites', {
        headers: {
          Authorization: localStorage.getItem('JWT'),
        },
      });
      setFavourite(result);
    };
    fetchData();
  }, []);

  console.log(favourite);
  return (
    <div>
      <h1>Favourites</h1>
    </div>
  );
};

export default Favourite;
