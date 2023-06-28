import {useEffect, useRef, useState} from 'react'
import IGenres from '../interfaces/genres'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { getGenres } from '../actions'

const useGetGenres = () => {
    const dispatch = useDispatch()
    const genresListRef = useRef<IGenres[]>([]);

    useEffect(()=>{
        const fetchGenres = async() => {
            try {
                const genresCollection = collection(db, "genres");
                const genresSnaptshot = await getDocs(genresCollection);
                const genresData: IGenres[] = genresSnaptshot.docs.map((doc) => doc.data() as IGenres);
                genresListRef.current = genresData
                dispatch(getGenres(genresData))
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        }
        fetchGenres()
    }, [])
    console.log(genresListRef)
    return genresListRef.current
}

export default useGetGenres