

export function fetchCharacters() {
    return fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(responseData => {
            return responseData.map((eachCharacter) => {
                return {
                    id: eachCharacter.id,
                    name: eachCharacter.name,
                    species: eachCharacter.species,
                    house: eachCharacter.house,
                    image: eachCharacter.image,
                    gender: eachCharacter.gender,
                    alive: eachCharacter.alive,
                    alternate_names: eachCharacter.alternate_names
                };
            })
        })
}