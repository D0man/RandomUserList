import debounce from 'lodash.debounce'
import { useState } from 'react'
import useRandomPersons from '../../hooks/useRandomPerson'
import { Pagination } from '../Pagination'
import { PersonCard } from '../PersonCard'
import { SearchBar } from '../SearchBar'
import { ResultPanel, ResultContainer } from './Results.styles'


export function Results() {
    const [page, setPage] = useState(1)
    const [seed, setSeed] = useState('')
    const handleSeedChange = debounce((event: { target: { value: string } })=>{
        setSeed(event.target.value)
        setPage(1)
    }, 700)

    const handlePageChange = ((pageNumber: number)=>{
        setPage(pageNumber)
    })
    const [results, status] = useRandomPersons(page,seed)
     return (
        <>
        <ResultPanel>
            <SearchBar id="searchSeed" labelText="🔍" placeholder="Search by seed" change={handleSeedChange}/>
            <ResultContainer>
                {status === "Error" && <div>Something went wrong, try again</div>}
                {results?.results?.map((person) => 
                <PersonCard key={person.name.first+person.name.last} 
                    country={person.location.country} 
                    firstName={person.name.first} 
                    secondName={person.name.last} 
                    title={person.name.title}  
                    image={person.picture.large}/>)}
            </ResultContainer>
        </ResultPanel>
        <Pagination key={page} currentPage={page} changePage={handlePageChange}/></>
     )
} 