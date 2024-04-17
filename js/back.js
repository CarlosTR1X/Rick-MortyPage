function getPersonajes(done) {
    const resultado = fetch("https://rickandmortyapi.com/api/character")
    resultado
        .then(response => response.json())
        .then(data => {
            done(data)
        })
       
}


getPersonajes(data=>{

    // Obtenemos los primeros 15 personajes con el .Slice
    let personajes= data.results.slice(0, 15) 
    // Recoremos cada uno de los personajes insertandolos 
    personajes.forEach(personaje => {

        const part = `
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

