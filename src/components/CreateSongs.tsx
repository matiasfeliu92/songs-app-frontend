import { FormEventHandler, useState } from "react";
import DataService from "../services/dataService";
import ISongs from "../interfaces/songs";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";

export const CreateSongs = () => {
  const service = new DataService();
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [you_tube, setYou_tube] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();

  const store: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const fields = [
      { name: "title", value: title },
      { name: "artist", value: artist },
      { name: "album", value: album },
      { name: "duration", value: duration },
      { name: "genre", value: genre },
      { name: "image", value: image },
      { name: "you_tube", value: you_tube },
    ];

    const formData: Record<string, string> = {};

    fields.forEach((field) => {
      formData[field.name] = field.value;
    });

    console.log(formData)

    await service.newSong(formData.title, formData.artist, formData.album, formData.duration, formData.genre, formData.image, formData.you_tube)
    .then((res: AxiosResponse)=>{
        console.log(res)
      })
      .catch((err:AxiosError) => {
        console.log(err)
      });
      navigate("/");
    };

  return (
    <div className="container">
      <div className="row">
        <h1>Ingresa tu cancion favorita</h1>
        <Link to="/" className="btn btn-primary">
          Ir a la lista
        </Link>
        <form onSubmit={store}>
          {/* <div className="container"> */}
            <label className="form-label">Imagen</label>
            <input
              className="form-control"
              value={image}
              placeholder="ingresa la URL de la imagen"
              onChange={(e) => setImage(e.target.value)}
              type="url"
              name="image"
            />
            <label className="form-label">Titulo</label>
            <input
              className="form-control"
              value={title}
              placeholder="ingresa el titulo"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
            <label className="form-label">Autor</label>
            <input
              className="form-control"
              value={artist}
              placeholder="ingresa el autor"
              onChange={(e) => setArtist(e.target.value)}
              type="text"
              name="artist"
            />
            <label className="form-label">Album</label>
            <input
              className="form-control"
              value={album}
              placeholder="ingresa el album"
              onChange={(e) => setAlbum(e.target.value)}
              type="text"
              name="album"
            />
            <label className="form-label">Genero</label>
            <input
              className="form-control"
              value={genre}
              placeholder="ingresa el genero musical"
              onChange={(e) => setGenre(e.target.value)}
              type="text"
              name="genre"
            />
            <label className="form-label">Duracion</label>
            <input
              className="form-control"
              value={duration}
              placeholder="ingresa la duracion"
              onChange={(e) => setDuration(e.target.value)}
              type="text"
              name="duration"
            />
            <label className="form-label">Link YouTube</label>
            <input
              className="form-control"
              value={you_tube}
              placeholder="ingresa la URL de YouTube"
              onChange={(e) => setYou_tube(e.target.value)}
              type="url"
              name="you_tube"
            />
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};
