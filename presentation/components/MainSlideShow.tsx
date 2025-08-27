import { useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Movie } from '~/infrastructure/interfaces/movie.interface';
import MoviesPoster from './movies/moviesPoster';

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
  return (
    <View>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => <MoviesPoster id={item.id} poster={item.poster} />}
        width={200}
        height={350}
        defaultIndex={0}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode="parallax"
      />
    </View>
  );
};
export default MainSlideShow;
