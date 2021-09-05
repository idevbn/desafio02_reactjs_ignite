import { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContext';

export function Header() {
  const { selectedGenre } = useContext(MoviesContext)

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}