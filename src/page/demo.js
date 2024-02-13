import React, { useState } from 'react';
import "../page/Home.css";

function Home() {
  const [directorName, setDirectorName] = useState('');
  const [movieName, setMovieName] = useState('');
  const [directorMovies, setDirectorMovies] = useState([]);

  const handleAddButton = () => {
    if (directorName && movieName) {
      setDirectorMovies([...directorMovies, { director: directorName, movie: movieName }]);
      setDirectorName('');
      setMovieName('');
    }
  };

  const handleRemoveButton = (index) => {
    setDirectorMovies(directorMovies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className='header'><h1 className='header-text'>Director and Movie</h1></div>
      <div className='main-container'>
        <input
          type='text'
          placeholder='Director name'
          className='text-box'
          value={directorName}
          onChange={(e) => setDirectorName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Movie name'
          className='text-box'
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button className='add-button' onClick={handleAddButton}>ADD</button>
      </div>
      <div className='below-box'>
      {directorMovies.map((item, index) => (
        <div key={index} className='below-main-container'>
          <input type='text' placeholder='Director name' className='text-box' value={item.director} readOnly />
          <input type='text' placeholder='Movie name' className='text-box' value={item.movie} readOnly />
          <button className='rm-button' onClick={() => handleRemoveButton(index)}>Remove</button>
        </div>
      ))}

      </div>

      
    </div>
  );
}

export default Home;
