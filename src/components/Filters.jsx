function Filters() {

    return (
        <>
            <form className="form1">
                <p>Busca por personaje</p>
                <input className="filterName" type="text" placeholder="Nombre del personaje" value="" />
            </form>
            <form className="form2">
                <p>Selecciona la casa</p>
                <input className="filterHouse" type="text" placeholder="Indica la casa del personaje" value="" />
            </form>

        </>

    );
}

export default Filters;