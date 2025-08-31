import { movieApi } from '~/core/api/movie-api';
import { MovieDBMoviesResponse } from '~/infrastructure/interfaces/moviedb.responses';
import { MovieMapper } from '~/infrastructure/mappers/movie.mapper';

export const TopRatedMoviesActions = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated');

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    console.log(JSON.stringify(movies, null, 2));

    return movies;
  } catch (error) {
    console.log(error);
    throw 'cannot load now playinf movies';
  }
};
