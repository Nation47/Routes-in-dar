import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value&&
                        user&&
                        user.name&&
                        user.name.toLowerCase().includes(value)
                    );
                })
                console.log(results)
                setResults(results)
            })
    }
    return (
        <>
            <div className='flex items-center bg-gray-200 p-5 rounded-lg shadow-md justify-center'>
                <FaSearch  className='text-xl text-blue-600 mr-2'/>
                <input 
                    type="text" 
                    placeholder='Search here....' 
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    className='outline-none rounded-2xl py-1.5 px-2 w-full '
                />
            </div>
        </>
    );
}
 
export default SearchBar;