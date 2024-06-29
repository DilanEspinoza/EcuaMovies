import { useState } from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";
import styles from "./styles/SearchMovie.module.css";

function SearchMovie() {
	const [valorInput, setValorInput] = useState("");
	const datos = useFetch(valorInput);

	const HandleChange = (e) => {
		e.preventDefault();
		setValorInput(e.target.value);
	};

	return (
		<>
			<h1>EcuaMoviesTv</h1>
			<form className={styles.form}>
				<input
					className={styles.input}
					type='text'
					placeholder='Buscar pelicula'
					onChange={HandleChange}
				/>
				<button type='submit' className={styles.button}>
					Buscar
				</button>
			</form>
			<main className={styles.container__movies}>
				{valorInput !== "" && datos ? (
					datos.results.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))
				) : (
					<p className={styles.p}>Sin peliculas</p>
				)}
			</main>
		</>
	);
}
export default SearchMovie;
