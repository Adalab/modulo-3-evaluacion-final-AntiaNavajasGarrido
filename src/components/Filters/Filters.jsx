import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";





function Filters( {filterName, handleChangeFilterName, filterHouse, handleChangeFilterHouse}) {

    return (
        <>
            
            <form className="filters" action="./">
                <FilterByName filterName={filterName} handleChangeFilterName={handleChangeFilterName}></FilterByName>
                <FilterByHouse filterHouse= {filterHouse} handleChangeFilterHouse={handleChangeFilterHouse}></FilterByHouse>
            </form>
        </>

    );
}

export default Filters;