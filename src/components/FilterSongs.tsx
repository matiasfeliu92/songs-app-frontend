import { SetStateAction, Dispatch } from "react";
import IArtists from "../interfaces/artists";
import IGenres from "../interfaces/genres";

type Props = {
  artists?: IArtists[];
  genres?: IGenres[];
  text: string;
  selectedArt?: string;
  selectedGen?: string;
  setSelectedArtist?: Dispatch<SetStateAction<string>>;
  setSelectedGenre?: Dispatch<SetStateAction<string>>;
  onSelectArtist?: (artist: string) => void;
  onSelectGenre?: (genre: string) => void;
};

const FilterSongs = ({
  genres,
  artists,
  text,
  selectedArt,
  selectedGen,
  setSelectedGenre,
  setSelectedArtist,
  onSelectArtist,
  onSelectGenre,
}: Props) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (text === "artists") {
      setSelectedArtist && setSelectedArtist(event.target.value as string);
    } else {
      setSelectedGenre && setSelectedGenre(event.target.value as string);
    }
  };

  if (text === "artists") {
    return (
      <div>
        <select onChange={handleSelectChange} name="filtersongs">
        <option value='Todos'>Todos</option>
          {artists &&
            artists.map((artist) => {
              return (
                <option key={artist.id} value={artist.name}>
                  {artist.name}
                </option>
              );
            })}
        </select>
      </div>
    );
  }
  return (
    <div>
      <select onChange={handleSelectChange} name="filtersongs">
      <option value='Todos'>Todos</option>
        {genres &&
          genres.map((genre) => {
            return (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default FilterSongs;
