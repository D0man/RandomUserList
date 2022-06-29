import {useState, useEffect} from 'react'
import {getRandomUsers, RandomUsers } from '../services/randomUsers'

interface LocalCache {
    [key: string] : RandomUsers
}

type Status = "Success"| "Error"
const localCache:LocalCache = {}

export default function useRandomPersons(page: number = 1, seed: string = ""): [RandomUsers, Status]{
    const [randomPersons, setRandomPersons] = useState({} as RandomUsers)
    const [status, setStatus] = useState("Success" as Status)

    useEffect(() => {
        setStatus("Success")
        async function fetchRandomPersons() {
            const results = await getRandomUsers(page, seed)
            if (results ==="Error"){
                setStatus("Error")
            } else {
                setRandomPersons(results)
                localCache[page+seed]
            }
        }
        if (localCache[page+seed]) {
            setRandomPersons(localCache[page+seed])
        } else {
            fetchRandomPersons();
        }
        
    }, [page+seed]);

    return [randomPersons, status]
}