import css from './renderTrendingMovies.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
function RenderTrendingMovies({ data }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {data.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
RenderTrendingMovies.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default RenderTrendingMovies;
