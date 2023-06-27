import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DataService from "../services/dataService";
import ISongs from "../interfaces/songs";
import IArtists from "../interfaces/artists";
import IGenres from "../interfaces/genres";
import FilterSongs from "./FilterSongs";
import useGetSongs from "../hooks/useGetSongs";
import useGetArtists from "../hooks/useGetArtists";
import { useGetGenres } from "../hooks/useGetGenres";

export const ShowSongs = () => {
  const [songss] = useGetSongs();
  const [artistss] = useGetArtists();
  const [genress] = useGetGenres();

  const [songsList, setSongsList] = useState<ISongs[]>([]);
  const [artistsList, setArtistsList] = useState<IArtists[]>([]);
  const [genresList, setGenresList] = useState<IGenres[]>([]);

  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  console.log(selectedArtist)
  console.log(selectedGenre)

  const service = new DataService();

  useEffect(() => {
    localStorage.setItem("songss", JSON.stringify(songss));
    const allSongs = localStorage.getItem("songss");
    if (allSongs !== null) {
      const parsedSongs: ISongs[] = JSON.parse(allSongs);
      setSongsList(parsedSongs);
    }

    localStorage.setItem("artistss", JSON.stringify(artistss));
    const allArtists = localStorage.getItem("artistss");
    if (allArtists !== null) {
      const parsedArtists: IArtists[] = JSON.parse(allArtists);
      setArtistsList(parsedArtists);
    }

    localStorage.setItem("genress", JSON.stringify(genress));
    const allGenres = localStorage.getItem("genress");
    if (allGenres !== null) {
      const parsedGenres: IGenres[] = JSON.parse(allGenres);
      setGenresList(parsedGenres);
    }
  }, [songss, artistss, genress]);

  console.log(songsList);
  console.log(artistsList);
  console.log(genresList);

  const filterArtSongs = songsList.filter((song) => song.artist === selectedArtist)
  const filterGenSongs = songsList.filter((song) => song.genre === selectedGenre)

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1>Guarda y escucha tus canciones favoritas</h1>
          <Link to="/new-song" className="btn btn-primary">
            Ingresa tu canción favorita
          </Link>
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Imagen</th>
                  <th>Titulo</th>
                  <th>
                    Autor
                    <FilterSongs
                      onSelectArtist={(artist: string) =>
                        setSelectedArtist(artist)
                      }
                      setSelectedArtist={setSelectedArtist}
                      selectedArt={selectedArtist}
                      text={"artists"}
                      artists={artistsList}
                    />
                  </th>
                  <th>Album</th>
                  <th>
                    Genero
                    <FilterSongs
                      onSelectGenre={(genre: string) => setSelectedGenre(genre)}
                      setSelectedGenre={setSelectedGenre}
                      selectedGen={selectedGenre}
                      text={"genres"}
                      genres={genresList}
                    />
                  </th>
                  <th>Duracion</th>
                  <th>YouTube</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {selectedArtist !== 'Todos' && selectedArtist !== '' ? (
                  filterArtSongs.map((song: ISongs) => (
                    <tr key={song.id}>
                      <td>
                        <img
                          width={100}
                          height={100}
                          className="imgCancion img-fluid"
                          src={song.image}
                          alt={song.title}
                        />
                      </td>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                      <td>{song.genre}</td>
                      <td>{song.duration}</td>
                      <td>
                        <a
                          target="blank"
                          className="btn btn-primary"
                          href={song.you_tube}
                        >
                          Link YouTube
                        </a>
                      </td>
                      <td>
                        <Link
                          to={`/actualizar/${song.id}`}
                          className="btn btn-info"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : selectedGenre !== 'Todos' && selectedGenre !== '' ? (
                  filterGenSongs.map((song: ISongs) => (
                    <tr key={song.id}>
                      <td>
                        <img
                          width={100}
                          height={100}
                          className="imgCancion img-fluid"
                          src={song.image}
                          alt={song.title}
                        />
                      </td>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                      <td>{song.genre}</td>
                      <td>{song.duration}</td>
                      <td>
                        <a
                          target="blank"
                          className="btn btn-primary"
                          href={song.you_tube}
                        >
                          Link YouTube
                        </a>
                      </td>
                      <td>
                        <Link
                          to={`/actualizar/${song.id}`}
                          className="btn btn-info"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  songsList.map((song: ISongs) => (
                    <tr key={song.id}>
                      <td>
                        <img
                          width={100}
                          height={100}
                          className="imgCancion img-fluid"
                          src={song.image}
                          alt={song.title}
                        />
                      </td>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                      <td>{song.genre}</td>
                      <td>{song.duration}</td>
                      <td>
                        <a
                          target="blank"
                          className="btn btn-primary"
                          href={song.you_tube}
                        >
                          Link YouTube
                        </a>
                      </td>
                      <td>
                        <Link
                          to={`/actualizar/${song.id}`}
                          className="btn btn-info"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );  
};
