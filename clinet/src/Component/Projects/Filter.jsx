import React from "react";
import { useEffect } from "react";
const Filter = ({ setFiltered, activeGenre, setActiveGenre, popular }) => {
  
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  
  return (
    <div className='filter-container'>
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        All Project
      </button>
      {/* <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "active" : ""}
      >
        Cat 1
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Cat 2
      </button> */}
    </div>
  );
};

export default Filter;