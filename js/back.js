//Creamos URL
const URL = "https://rickandmortyapi.com/api/character"


async function getPersonajes(done) {
    try {
        await fetch(URL)
            .then(response => response.json())
            .then(data => {
                done(data)
            })
    } catch (error) {
        console.log(error.message)
    }

}


getPersonajes(async(data) => {

    // Obtenemos los primeros 15 personajes con el .Slice
    let personajes = await data.results.slice(0, 15)
    // Recoremos cada uno de los personajes insertandolos 
    personajes.forEach(personaje => {

        const part =`
        <div class="card">
        <div class="imagen-contenedor">
           <img src="${personaje.image}" alt="">
        </div>
        <h2>${personaje.name}</h2>
        <p>${personaje.status}</p>
        </div>
        `
        const articulo = document.createRange().createContextualFragment(part)

        const main = document.getElementById("personajes")
        main.append(articulo)

    });

})

