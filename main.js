let container = document.querySelector(".container");
const apiKey = "f6cb23dde2cb05ebc7da6c3cb4a7fa0d";
const baseUrl = "https://api.themoviedb.org/3";

let form = document.getElementById("form__movies");
let movieSearchInput = document.getElementById("search__movie");
let btnSearch = document.getElementById("btn__search");
const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

let loadingMessage = document.createElement("p");
loadingMessage.textContent = "Cargando...";
loadingMessage.style.display = "none"; // Oculto por defecto
container.appendChild(loadingMessage);

async function getData(valueInput = undefined) {
	try {
		let response = await fetch(
			`${baseUrl}/search/movie?api_key=${apiKey}&query=${valueInput}`
		);
		let data = await response.json();
		return data.results;
	} catch (error) {}
}

async function showMovies() {
	container.innerHTML = "";
	let valueInput = movieSearchInput.value;
	let data = await getData(valueInput);
	if (data) {
		data.forEach((e) => {
			let article = document.createElement("article");
			let imgMovie = `${posterBaseUrl}${e.poster_path}`;
			article.innerHTML = `
            <h2>${e.title}</h2>
            <img src="${imgMovie}" alt="${e.original_title}"> 
            `;

			container.appendChild(article);
		});
	}
}

btnSearch.addEventListener("click", () => {
	let valueInput = movieSearchInput.value;
	getData(valueInput);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	showMovies();
});
