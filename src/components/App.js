import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieInfo } from '../features/MovieSlice';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Card from './common/Card';
import Main from './Layout/Main';

function App() {
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  const dispatch = useDispatch();

  let [showMovie, setShowMovie] = useState(false);

  useEffect(() => {
    dispatch(getMovieInfo());
  }, []);

  // useEffect(() => {
  //   if(movies.isReady !== true) {
  //     dispatch(getMovieInfo());
  //     //console.log(movies);
  //   }
  //   else
  //     setShowMovie(true);
  // },[movies.isReady])

  return (
    <div className="App">
      <Header />
      <Main>
        {movies.isReady === true ? (
          movies.movieMatch.map((movie) => {
            return (
              <Card
                key={movie.imdbID}
                theposter={movie.Poster}
                title={movie.Title}
              >
                {movies.isLoading ? (
                  <p style={{ backgroundColor: 'yellow' }}>Loading</p>
                ) : (
                  <p style={{ backgroundColor: 'green' }}>Done</p>
                )}
              </Card>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
