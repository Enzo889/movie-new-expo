import { Pressable, Image } from 'react-native';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}
const MoviesPoster = ({ id, poster, className, smallPoster = false }: Props) => {
  return (
    <Pressable className={`px-2 active:opacity-90 ${className} `}>
      <Image
        source={{ uri: poster }}
        className="h-full w-full rounded-2xl shadow-lg"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
export default MoviesPoster;
