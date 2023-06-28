import IArtists from "./artists";
import IGenres from "./genres";
import ISongs from "./songs";

export default interface State {
    songs: ISongs[];
    artists: IArtists[];
    genres: IGenres[];
    loading: boolean;
  }