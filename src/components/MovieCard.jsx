import styles from "./styles/MovieCard.module.css";

function MovieCard({ movie }) {
	const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
	return (
		<article className={styles.article}>
			<h2 className={styles.h2}>{movie.title}</h2>
			<img
				className={styles.img}
				src={`${posterBaseUrl}${movie.poster_path}`}
				alt={movie.overview}
			/>
		</article>
	);
}
export default MovieCard;
