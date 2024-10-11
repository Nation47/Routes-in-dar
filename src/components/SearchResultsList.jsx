const SearchResultsList = ({result}) => {
    return (
        <>
            <div className="cursor-pointer hover:bg-gray-100 hover:text-black rounded-md my-1 px-2 py-1">{result.name}</div>
        </>
    );
}
 
export default SearchResultsList;