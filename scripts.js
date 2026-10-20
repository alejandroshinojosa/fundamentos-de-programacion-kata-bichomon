console.log(document.title);
console.log(document.getElementById("gen-1"));



document.getElementById("gen-1").textContent = 'Generasion 1 Pokimon';

/////// ejer. 2

document.querySelector(".infocard-list.infocard-list-pkmn-lg").style.backgroundColor = 'red';

/////// ejer. 3

console.log(window.location.href);

////// ejer 4

console.log(window.location.hostname)



////// ejer 5

const imagenesPokemon = document.querySelectorAll('img');

console.log(imagenesPokemon);


///// ejer 6

const imagenes = document.querySelectorAll("img")

for(let i = 0; i < imagenes.length; i++){
    console.log(imagenes[1].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
};