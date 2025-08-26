import { useQuery } from '@tanstack/react-query';
import { nowPlayincActions } from '~/core/actions/movies/now-praying.actions';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayincActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
  };
};
