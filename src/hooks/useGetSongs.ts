import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { collection, getDocs } from "firebase/firestore";
import ISongs from "../interfaces/songs";
import { db } from "../firebase/config";
import { getSongs } from "../actions";

const useGetSongs = () => {
  const dispatch = useDispatch();
  const songsListRef = useRef<ISongs[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsCollection = collection(db, "songs");
        const songsSnapshot = await getDocs(songsCollection);
        const songsData: ISongs[] = songsSnapshot.docs.map((doc) => doc.data() as ISongs);
        songsListRef.current = songsData;
        dispatch(getSongs(songsData));
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);
  console.log(songsListRef)
  return songsListRef.current;
};

export default useGetSongs;
