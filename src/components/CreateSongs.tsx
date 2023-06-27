import { FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/config"; // Import the db object from your firebase.js file
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";

export const CreateSongs = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [youTube, setYouTube] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const store: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      artist,
      album,
      genre,
      duration,
      youTube,
      image,
    };

    console.log(formData);

    const artistDocRef = doc(db, "artists", artist);
    const artistDoc = await getDoc(artistDocRef);

    if (!artistDoc.exists()) {
      // The artist does not exist, create a new document in "artists" collection
      await setDoc(artistDocRef, {name: formData.artist});
    }

    const genreDocRef = doc(db, "genres", genre);
    const genreDoc = await getDoc(genreDocRef);

    if (!genreDoc.exists()) {
      // The genre does not exist, create a new document in "genres" collection
      await setDoc(genreDocRef, {name: formData.genre});
    }

    const songsCollectionRef = collection(db, "songs");
    await addDoc(songsCollectionRef, formData);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Ingresa tu canción favorita</h1>
        <Link to="/" className="btn btn-primary">
          Ir a la lista
        </Link>
        <form onSubmit={store}>
          <label className="form-label">Imagen</label>
          <input
            className="form-control"
            value={image}
            placeholder="Ingresa la URL de la imagen"
            onChange={(e) => setImage(e.target.value)}
            type="url"
            name="image"
          />
          <label className="form-label">Título</label>
          <input
            className="form-control"
            value={title}
            placeholder="Ingresa el título"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <label className="form-label">Artista</label>
          <input
            className="form-control"
            value={artist}
            placeholder="Ingresa el artista"
            onChange={(e) => setArtist(e.target.value)}
            type="text"
            name="artist"
          />
          <label className="form-label">Álbum</label>
          <input
            className="form-control"
            value={album}
            placeholder="Ingresa el álbum"
            onChange={(e) => setAlbum(e.target.value)}
            type="text"
            name="album"
          />
          <label className="form-label">Género</label>
          <input
            className="form-control"
            value={genre}
            placeholder="Ingresa el género musical"
            onChange={(e) => setGenre(e.target.value)}
            type="text"
            name="genre"
          />
          <label className="form-label">Duración</label>
          <input
            className="form-control"
            value={duration}
            placeholder="Ingresa la duración"
            onChange={(e) => setDuration(e.target.value)}
            type="text"
            name="duration"
          />
          <label className="form-label">Enlace de YouTube</label>
          <input
            className="form-control"
            value={youTube}
            placeholder="Ingresa el enlace de YouTube"
            onChange={(e) => setYouTube(e.target.value)}
            type="url"
            name="youTube"
          />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
