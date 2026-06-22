import { useState } from "react";
import MovieCard from "../assets/components/MovieCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Inception", release_date: "2010" },
    { id: 3, title: "The Dark Knight", release_date: "2008" },
    { id: 4, title: "Interstellar", release_date: "2014" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery('------');
  };

  const goToFav = () => {
    navigate("/Favourites");
  }

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <button type="button" onClick={goToFav}>Favourites</button>
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
