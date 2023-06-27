import {useEffect, useState} from 'react'
import IGenres from '../interfaces/genres'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export const useGetGenres = () => {
    const [genress, setGenress] = useState<IGenres[]>([])

    useEffect(()=>{
        const fetchGenres = async() => {
            try {
                const genresCollection = collection(db, "genres");
                const genresSnaptshot = await getDocs(genresCollection);
                const genresData: IGenres[] = genresSnaptshot.docs.map((doc) => doc.data() as IGenres);
                setGenress(genresData);
            } catch (error) {
                console.error("Error fetching trabajos:", error);
            }
        }
        fetchGenres()
    }, [])
    
    return [genress]
}
