import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideShow from '~/presentation/components/MainSlideShow';
import MoviesHorizontalList from '~/presentation/components/movies/MoviesHorizontalList';
import { useMovies } from '~/presentation/hooks/useMovies';

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color={'blue'} size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="mb-2 px-4 text-3xl font-bold">Movies APP</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <MoviesHorizontalList movies={popularQuery.data ?? []} title="Populares" className="mb-6" />
        <MoviesHorizontalList
          movies={topRatedQuery.data ?? []}
          title="Mejores Puntuadas"
          className="mb-6"
        />
        <MoviesHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-6"
        />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
