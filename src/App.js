import "./styles.css";

const FavoriteMovie = () => {
  const movieTitle = "The Witcher";
  const movieDescription = "Series";

  return (
    <div className="movie-container">
      <h1 className="Movie-title">{movieTitle}</h1>
      <img
        src="https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1687959506"
        alt="witcher"
        className="series"
      />

      <p className="movie-description">{movieDescription}</p>

      <img
        src="https://www.pinkvilla.com/images/2023-07/36340310_the-witcher-3.jpg"
        alt="see"
        className="series"
      />
    </div>
  );
};

export default FavoriteMovie;
