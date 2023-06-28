import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import IArtists from "../interfaces/artists";
import { useDispatch } from "react-redux";
import { getArtists } from "../actions";

const useGetArtists = () => {
    const dispatch = useDispatch()
    const artistListRef = useRef<IArtists[]>([])

    useEffect(()=>{
        const fetchArtists = async() => {
            try {
                const artistsCollection = collection(db, "artists");
                const artistsSnaptshot = await getDocs(artistsCollection);
                const artistsData: IArtists[] = artistsSnaptshot.docs.map((doc) => doc.data() as IArtists);
                artistListRef.current = artistsData
                dispatch(getArtists(artistsData))
              } catch (error) {
                console.error("Error fetching trabajos:", error);
              }
        }
        fetchArtists()
    }, [])
    console.log(artistListRef)
    return artistListRef.current
}

export default useGetArtists