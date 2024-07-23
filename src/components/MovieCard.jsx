
function MovieCard({ movie }) {
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <article >
            <h2 >{movie.title}</h2>
            <img
                src={`${posterBaseUrl}${movie.poster_path}`}
                alt={movie.overview}
            />
        </article>
    );
}
export default MovieCard;