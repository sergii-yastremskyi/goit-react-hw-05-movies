import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './MoviesThumbs.module.css';
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';
export default function MovieThumbs({ moviesSearch }) {
  const location = useLocation();
  useEffect(() => {});
  return (
    <div className={css.thumbsContainer}>
      {moviesSearch.length > 0 && (
        <ul className={css.thumbsList}>
          {moviesSearch.map(({ poster_path, title, id }) => (
            <li className={css.thumbListItem} key={id}>
              <Link state={{ from: location }} to={`${id}`}>
                {poster_path ? (
                  <img
                    className={css.posterImage}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                ) : (
                  <img
                    className={css.posterImage}
                    src={`https://via.placeholder.com/200x300?text=${title}`}
                    alt={title}
                  />
                )}
                <h2 className={css.movieTitle}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
MovieThumbs.propTypes = {
  moviesSearch: PropTypes.arrayOf(PropTypes.object),
};
