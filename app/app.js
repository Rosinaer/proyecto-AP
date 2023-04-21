fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {

    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-tarjetas");

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
        <div class="tarjetas">
           <img src="${personajes[i].image}">
           <h3>${personajes[i].name}</h3>
           <p>Gender: ${personajes[i].gender}</p>
           <p>Species: ${personajes[i].species}</p>
           <p>Status: ${personajes[i].status}</p>
        </div> `;
    }
  });