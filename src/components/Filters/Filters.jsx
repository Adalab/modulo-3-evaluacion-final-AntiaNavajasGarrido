import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";





function Filters( filterName, handleChangeFilterName) {

    return (
        <>
            
            <FilterByName filterName={filterName} handleChangeFilterName={handleChangeFilterName}></FilterByName>
            <p>Selecciona la casa:</p>
            <FilterByHouse></FilterByHouse>
        </>

    );
}

export default Filters;