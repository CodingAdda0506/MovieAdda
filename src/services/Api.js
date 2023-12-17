import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const page = 1;

export const TMDBAPI = createApi({
    reducerPath: "TMDBAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    endpoints: (builder) => ({

        // Get Genres
        getMovieByGenre: builder.query({
            query: () => `genre/movie/list?api_key=10b5c5548b9651acf9cab5aeee149263`,
        }),
        // Get movies by type
        getMovies: builder.query({
            query: ({ genreName, page, searchQuery }) => {

                // Get movies by searching
                if (searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=10b5c5548b9651acf9cab5aeee149263`
                }

                // Get movies by Genre
                if (genreName && typeof genreName === 'number') {
                    return `discover/movie?with_genres=${genreName}&page=${page}&api_key=10b5c5548b9651acf9cab5aeee149263`
                }
                // Get Popular Movies
                return `movie/popular?page=${page}&api_key=10b5c5548b9651acf9cab5aeee149263`;
            }
        }),
        // Get Movie
        getMovie: builder.query({
            query: (id) =>
                `/movie/${id}?append_to_response=videos,credits&api_key=10b5c5548b9651acf9cab5aeee149263`,
        }),
    }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetMovieByGenreQuery } = TMDBAPI;