import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DataService from "../services/dataService";
import ISongs from "../interfaces/songs";
import IArtists from "../interfaces/artists";
import IGenres from "../interfaces/genres";
import { FilterSongs } from "./FilterSongs";

export const ShowSongs = () => {
  const [songsList, setSongsList] = useState<ISongs[]>([]);
  const [artistsList, setArtistsList] = useState<string[]>([]);
  const [genresList, setGenresList] = useState<string[]>([]);

  const service = new DataService();

  useEffect(() => {
    service
      .getAllSongs()
      .then((res) => {
        setSongsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      service
      .getAllArtists()
      .then((res) => {
        const artists = res.data.map((artist: IArtists) => artist.name);
        setArtistsList(artists);
      })
      .catch((err) => {
        console.log(err);
      });
    
    service
      .getAllGenres()
      .then((res) => {
        const genres = res.data.map((genre: IGenres) => genre.name);
        setGenresList(genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(songsList);
  console.log(artistsList)
  console.log(genresList)

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1>Guarda y escucha tus canciones favoritas</h1>
          <Link to="/new-song" className="btn btn-primary">
            Ingresa tu cancion favorita
          </Link>
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Imagen</th>
                  <th>Titulo</th>
                  <th>
                    Autor
                    <FilterSongs data={artistsList}/>
                  </th>
                  <th>Album</th>
                  <th>
                    Genero
                    <FilterSongs data={genresList}/>
                  </th>
                  <th>Duracion</th>
                  <th>YouTube</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {songsList.map((song: ISongs) => {
                  return (
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
                        <a target="blank" className="btn btn-primary" href={song.you_tube}>
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
                        {/* <button onClick={()=>eliminarCanc(cancion.id)} className='btn btn-danger'>Eliminar</button> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
