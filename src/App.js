import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';

import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import './App.css';

export const QueryContext = React.createContext();

const Home = React.lazy(() => import('./pages/Home'));
const Movies = React.lazy(() => import('./pages/Movies'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));
const SharedLayout = React.lazy(() => import('./SharedLayout'));
function App() {
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <Header />
      <QueryContext.Provider value={{ state, setState }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="/*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </QueryContext.Provider>
    </div>
  );
}

export default App;
