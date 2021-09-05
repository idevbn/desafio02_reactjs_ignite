import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';
import { MovieCard } from './MovieCard';
import { Header } from './Header';


export function Content() {
  // Complete aqui
  const { movies, selectedGenre } = useContext(MoviesContext);

  return (
    <div className="container">
    <Header />

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key ={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  </div>
  )
}