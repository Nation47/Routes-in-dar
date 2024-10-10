import SearchResultsList from "./SearchResultsList";

const SearchResults = ({results}) => {
    return (
        <>
            <div className="bg-gray-200 text-start px-14 py-3 rounded-xl mt-4 shadow-lg">
                {results.map((result, index) => {
                    return <SearchResultsList result={result} key={index} />
                })}
            </div>
        </>
    );
}
 
export default SearchResults;