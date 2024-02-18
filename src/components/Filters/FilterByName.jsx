function FilterByName(filterName, handleChangeFilterName) {

    const hadleChange = (event) => {
        handleChangeFilterName(event.currentTarget.value);

    }

    return (
        <form className="form1">
            <label htmlFor="names">Busca por personaje:</label>
            <input className="filterName" id="names" type="text" placeholder="Nombre del personaje" onInput={hadleChange} />
            <label htmlFor="all">Todos los personajes:</label>
            <input className="filterAll" type="checkbox" id="all" name="all" value="all" checked={filterName === "all"} />
        </form>
    );
}

export default FilterByName;