import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiKey } from '../../pages/Home/Home';
import css from './searchbar.module.css';

export default function Searchbar({ submitHandler }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState('');

  const onSearch = e => {
    const { value } = e.target;

    e.preventDefault();
    setState(value);
  };
  //   const handleFetch = () => {
  //     fetch(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${state}&page=1&include_adult=false`
  //     )
  //       .then(response => response.json())
  //       .then(data => {
  //         setMoviesSearch(data.results);
  //       });
  //   };
  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setState(query);
      submitHandler(query);
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(state !== '' ? { query: state } : {});
    submitHandler(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={state}
          onChange={onSearch}
          id="search"
        />
      </form>
    </div>
  );
}
