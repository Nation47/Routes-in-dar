import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const fetchData = async (value) => {
        if(!value) return;

        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            const results = data.filter( user => user.name.toLowerCase().includes(value.toLowerCase()));

            setResults(results);
        }catch(err) {
            console.log("Error to fetch data:", err)
        }
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