import { useQuery } from '@tanstack/react-query';
import { nowPlayincActions } from '~/core/actions/movies/now-praying.actions';
import { PopularMoviesActions } from '~/core/actions/movies/poular.actions';
import { TopRatedMoviesActions } from '~/core/actions/movies/top-rated.actions';
import { UpcomingMoviesActions } from '~/core/actions/movies/upcoming.actions';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayincActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: PopularMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const topRatedQuery = useQuery({
    queryKey: ['movies', 'top_rated'],
    queryFn: TopRatedMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: UpcomingMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
