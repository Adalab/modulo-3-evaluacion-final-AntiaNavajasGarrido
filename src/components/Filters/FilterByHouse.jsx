function FilterByHouse({filterHouse, handleChangeFilterHouse}) {

    const hadleChange = (event) => {
      handleChangeFilterHouse(event.currentTarget.value);

    }

    return (
    <>
    <div className="filterHouse">
        <label className="label__name" htmlFor="searchHouse">Busca por casa:
        <select name="house" id="searchHouse" onChange={hadleChange} value={filterHouse}>
          <option value="gryffindor">Gryffindor</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
          <option value="all">Todos</option>
        </select>
          </label>
    </div>
  </>
)}

export default FilterByHouse;