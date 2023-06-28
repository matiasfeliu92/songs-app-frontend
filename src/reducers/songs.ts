import {
    ADD_SONG,
    FILTER_SONGS,
    GET_ARTISTS,
    GET_GENRES,
    GET_SONGS,
  } from "../actions/types";
  import Action from "../interfaces/action";
  import State from "../interfaces/state";
  import ISongs from "../interfaces/songs";
  
  const initialState = {
    songs: [],
    artists: [],
    genres: [],
    loading: false,
  };
  
  const filterSongs = (state: State, action: Action): State => {
    const { text, selectedArt, selectedGen } = action.payload;
    let filteredSongs: ISongs[] = [...state.songs];
  
    if (text === "artists" && selectedArt && selectedArt !== "Todos") {
      filteredSongs = filteredSongs.filter(
        (song) => song.artist === selectedArt
      );
    } else if (text === "genres" && selectedGen && selectedGen !== "Todos") {
      filteredSongs = filteredSongs.filter((song) =>
        song.genre.includes(selectedGen)
      );
    }
  
    return {
      ...state,
      songs: filteredSongs,
    };
  };
  
  export const songsReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
      case GET_SONGS:
        console.log(state.songs)
        return {
          ...state,
          songs: [...action.payload],
          loading: false,
        };
      case GET_ARTISTS:
        console.log(state.artists)
        return {
          ...state,
          artists: [...action.payload],
          loading: false,
        };
      case GET_GENRES:
        console.log(state.genres)
        return {
          ...state,
          genres: [...action.payload],
          loading: false,
        };
      case ADD_SONG:
        return {
          ...state,
          songs: [...state.songs, action.payload],
        };
      case FILTER_SONGS:
        return filterSongs(state, action);
      default:
        return state;
    }
  };
  