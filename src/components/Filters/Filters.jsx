import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";





function Filters( {filterName, handleChangeFilterName}) {

    return (
        <>
            
            <form action="./">
                <FilterByName filterName={filterName} handleChangeFilterName={handleChangeFilterName}></FilterByName>
                <FilterByHouse></FilterByHouse>
            </form>
        </>

    );
}

export default Filters;