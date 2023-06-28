import IArtists from '../interfaces/artists'
import IGenres from '../interfaces/genres'
import ISongs from '../interfaces/songs'
import {GET_SONGS ,ADD_SONG, SET_LOADING, GET_ARTISTS, GET_GENRES} from './types'

export const getSongs = (payload: ISongs[]) => ({
    type: GET_SONGS,
    payload,
})

export const getArtists = (payload: IArtists[]) => ({
    type: GET_ARTISTS,
    payload,
})

export const getGenres = (payload: IGenres[]) => ({
    type: GET_GENRES,
    payload,
})

export const addSongs = (payload: ISongs) => ({
    type: ADD_SONG,
    payload
})

export const setLoading = (payload: boolean) => ({
    type: SET_LOADING,
    payload,
  });