import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import IArtists from "../interfaces/artists";

const useGetArtists = () => {
    const [artistss, setArtistss] = useState<IArtists[]>([])

    useEffect(()=>{
        const fetchArtists = async() => {
            try {
                const artistsCollection = collection(db, "artists");
                const artistsSnaptshot = await getDocs(artistsCollection);
                const artistsData: IArtists[] = artistsSnaptshot.docs.map((doc) => doc.data() as IArtists);
                setArtistss(artistsData);
              } catch (error) {
                console.error("Error fetching trabajos:", error);
              }
        }
        fetchArtists()
    }, [])
    return [artistss]
}

export default useGetArtists