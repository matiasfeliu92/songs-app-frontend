import { useState, useEffect } from "react";
import DataService from "../services/dataService";
import { Link } from "react-router-dom";
import ISongs from "../interfaces/songs";

export const ShowSongs = () => {
  const [songsList, setSongsList] = useState<ISongs[]>([]);
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
  }, []);

  console.log(songsList);
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Guarda y escucha tus canciones favoritas</h1>
          <Link to="/save" className="btn btn-primary">
            Ingresa tu cancion favorita
          </Link>
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Imagen</th>
                  <th>Titulo</th>
                  <th>Autor</th>
                  <th>Album</th>
                  <th>Genero</th>
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
                        <a className="btn btn-primary" href={song.you_tube}>
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
