function MovieCard({ movie }) {
  function onFavouriteClick() {
    alert("Clicked");
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.img} alt={movie.alt} />
          <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>
              🤍
            </button>
          </div>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </>
  );
}

export default MovieCard;
