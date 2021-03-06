import { useContext } from 'react';

import { Button } from './Button';

import { MoviesContext } from '../contexts/MoviesContext';

export function SideBar() {
  // Complete aqui
  const { handleClickButton, genres, selectedGenreId } = useContext(MoviesContext);

  return (   
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}