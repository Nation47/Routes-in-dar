import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Homepage = () => {
    const [results, setResults] = useState([]);
    return (
        <>
            <div className="">
                <SearchBar setResults={setResults}/>
                <SearchResults results = {results}/>
            </div>
        </>
    );
}
 
export default Homepage;