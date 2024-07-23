import { useState } from "react";
import MovieCard from "./components/MovieCard";

const url = import.meta.env.VITE_BASE_URL
const api_key = import.meta.env.VITE_API_KEY

function App() {
	const [datos, setDatos] = useState([]);
	const [query, setQuery] = useState("")

	const HandleChange = (e) => setQuery(e.target.value)

	const getMovies = async (e) => {
		e.preventDefault()
		try {
			let response = await fetch(
				`${url}/search/movie?api_key=${api_key}&query=${query}`
			);
			let data = await response.json()
			let result = data.results
			setDatos(result);

		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div>
				<h1>EcuaMoviesTv</h1>
				<form onSubmit={getMovies}>
					<input

						type='text'
						placeholder='Buscar pelicula'
						onChange={HandleChange}
					/>
					<button type='submit'>
						Buscar
					</button>
				</form>
			</div>

			<main >

				{datos.length > 0 &&
					datos.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
			</main>
		</>
	);
}
export default App;
