import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';

export const Directory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://project-express-api-5g4lrfrwlq-lz.a.run.app/directory')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.show_id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Director: {item.director}</p>
          <p>Cast: {item.cast}</p>
          <p>Country: {item.country}</p>
          <p>Date Added: {item.date_added}</p>
          <p>Release Year: {item.release_year}</p>
          <p>Rating: {item.rating}</p>
          <p>Duration: {item.duration}</p>
          <p>Listed In: {item.listed_in}</p>
          <p>Type: {item.type}</p>
        </div>
      ))}
    </div>
  );
}