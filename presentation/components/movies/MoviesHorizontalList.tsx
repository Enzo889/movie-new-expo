import { View, Text, FlatList } from 'react-native';
import { Movie } from '~/infrastructure/interfaces/movie.interface';
import MoviesPoster from './moviesPoster';

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}
const MoviesHorizontalList = ({ movies, title, className }: Props) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="mb-2 px-4 text-3xl font-bold"> {title} </Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MoviesPoster id={item.id} poster={item.poster} smallPoster />}
      />
    </View>
  );
};
export default MoviesHorizontalList;
