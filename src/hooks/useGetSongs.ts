import { useEffect, useState } from "react";
import ISongs from "../interfaces/songs";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const useGetSongs = () => {
    const [songss, setSongss] = useState<ISongs[]>([])

    useEffect(()=>{
        const fetchSongs = async() => {
            try {
                const songsCollection = collection(db, "songs");
                const songsSnaptshot = await getDocs(songsCollection);
                const songsData: ISongs[] = songsSnaptshot.docs.map((doc) => doc.data() as ISongs);
                setSongss(songsData);
              } catch (error) {
                console.error("Error fetching trabajos:", error);
              }
        }
        fetchSongs()
    }, [])

    return [songss]
}

export default useGetSongs