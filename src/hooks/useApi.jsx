const PROXY = "https://anymey-proxy.vercel.app/cors?url=";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmYxZmIxMmNhYTg4MzIyNGE4MzYzZGMwMzI5YjNiYyIsIm5iZiI6MTcyMjUzMzMxNS4xNDMxOTYsInN1YiI6IjY2OTc5YjJlOGE4ZDI0OTk1MTk4ZDBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU0LaiXEoOMHop7gUT7rhCOa--IfwnzitSncuSqb3Lo";
const BASE_MOVIE_URL = "https://api.themoviedb.org/3";
export const ImageFetcher = (path) =>
  `https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${path}`;

// Helper function to fetch data
const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    return data?.results || data;
  } catch (error) {
    console.log(url);
    console.error("Error fetching data:", error);
    return null;
  }
};

// Movie and TV API calls
export const fetchTvOntheAir = () =>
  fetchData(`${PROXY}${BASE_MOVIE_URL}/tv/on_the_air`);

export const fetchTvNowPlaying = () =>
  fetchData(`${PROXY}${BASE_MOVIE_URL}/tv/now_playing`);

export const fetchTvTopRated = () =>
  fetchData(`${BASE_MOVIE_URL}/tv/top_rated`);

export const fetchTvAiringToday = () =>
  fetchData(`${BASE_MOVIE_URL}/tv/airing_today`);

export const fetchMovieTopRated = () =>
  fetchData(`${BASE_MOVIE_URL}/movie/top_rated`);

export const fetchMovieUpcoming = () =>
  fetchData(`${BASE_MOVIE_URL}/movie/upcoming`);

export const fetchMovieNowPlaying = () =>
  fetchData(`${BASE_MOVIE_URL}/movie/now_playing`);

export const fetchMovieTrending = () =>
  fetchData(`${BASE_MOVIE_URL}/trending/movie/day`);

export const fetchTvPopular = () =>
  fetchData(`${BASE_MOVIE_URL}/tv/popular`);

export const fetchMoviePopular = () =>
  fetchData(`${BASE_MOVIE_URL}/movie/popular`);

export const fetchMovieSearch = (query) =>
  fetchData(`${BASE_MOVIE_URL}/search/movie?query=${query}`);

export const fetchTvSearch = (query) =>
  fetchData(`${BASE_MOVIE_URL}/search/tv?query=${query}`);

export const fetchMovieInfo = (movieId) =>
  fetchData(`${BASE_MOVIE_URL}/movie/${movieId}`);

export const fetchTVInfo = (TVId) =>
  fetchData(`${BASE_MOVIE_URL}/tv/${TVId}`);
