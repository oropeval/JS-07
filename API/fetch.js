
/*
console.log("conected")
//fetch
//post

const BASE_URL = `https://pokeapi.co/api/v2/`;

//fetch no async
/*
fetch(BASE_URL + `pokemon/ditto`)
.then(res => res.json())
.then(data => console.log(data));
*/
//fetch async
/*
const fetchPokemon = async (pokemon) => {
try{
//const response = await fetch (BASE_URL + `pokemon/ditto`);
const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
const parsedResponse = await response.json();
return parsedResponse;
} catch (err){
    console.error(err);
}
}

//obtener pokemon
document.getElementById(`get-btn`)
.addEventListener(`click`, async() => {
    const text = document.getElementById(`poke-name`).value.toLoweCase();
    const pokemon = await fetchPokemon(text);
    localStorage.setItem(`currentPokeId`, pokemon.id);
    console.log(pokemon.name);
})

document.addEventListener(`DOMContentLoaded`, () =>{
    const storedId = localStorage.getItem(`currentPokeId`);
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = fetchPokemon(initialId);
    console.log(pokemon.name);
})

//obtener el anterior y el siguiente
document.getElementById(`previous-btn`).addEventListener(`click`, async () => {
    //const currentPokeID = parseInt(localStorage.getItem(`currentPokeID`));
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId -1);
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name);
})

document.getElementById('next-btn')
addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = currentPokeId +1;
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name);
})


//post
////////////////// POST
//
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))
    */

////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch

//Fetch
//
//POST

const BASE_URL= 'https://pokeapi.co/api/v2/';

//Fetch no async
fetch(BASE_URL + 'pokemon/ditto')
        .then(res=>res.json())
        .then(data=>console.log(data));

//Fetch async
//El await siempre va a hacer q espere a q se complete lo solicitado para continuar la linea de abajo solo para este caso
//Parsear es formatear

const fetchPokemon = async (pokemon) => {
    try {
        //const response = await fetch(BASE_URL + 'pokemon/ditto');
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

//Obtener pokemon 
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();//trae una cadena de texto
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        actCard(pokemon);
    })

document.addEventListener('DOMContent.Loaded', async ()=>{
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.id);
    actCard(pokemon);
})

//Obtener el anterior
//
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () =>{
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
        const newId = Math.max(1, currentPokeId-1);
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name); 
        actCard(pokemon);
    })

    document.getElementById('next-btn')
    .addEventListener('click', async () =>{
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
        const newId = currentPokeId+1;
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name); 
        actCard(pokemon);
    })

    /////////////////////POST, no es asincrono
    /*
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))
*/



//configuracion de contenido
function actCard (pokemon){
document.getElementById('pokeNombre').textContent = pokemon.name;
document.getElementById('pokeId').textContent = pokemon.id;
document.getElementById('pokePeso').textContent = pokemon.weight;
document.getElementById('image_p').src = pokemon.sprites.front_shiny;
}