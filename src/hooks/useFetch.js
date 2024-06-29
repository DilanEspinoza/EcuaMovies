//`${baseUrl}/search/movie?api_key=${apiKey}&query=${movie}`
import { useState, useEffect } from "react";

const apiKey = "f6cb23dde2cb05ebc7da6c3cb4a7fa0d";
const baseUrl = "https://api.themoviedb.org/3";

function useFetch(valorInput = "lupita") {
	const [datos, setDatos] = useState("");

	useEffect(() => {
		const getMovies = async () => {
			try {
				let response = await fetch(
					`${baseUrl}/search/movie?api_key=${apiKey}&query=${valorInput}`
				);
				let result = await response.json();
				setDatos(result);
			} catch (error) {
				console.log(error);
			}
		};
		if (valorInput !== "") {
			getMovies();
		}
	}, [valorInput]);
	return datos;
}
export default useFetch;
