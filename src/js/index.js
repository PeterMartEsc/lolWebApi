// Importamos la clase Pokemon desde el archivo Pokemon.js
import Champ from './Champ.js';
//import Oke from '../assets/sounds/oke.mp3';

var champs = [];

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");


button.addEventListener("click", () => {

    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.display = 'none';

    document.querySelector('#infoP').style.visibility = 'visible';

    // También cambiamos la visibilidad del elemento #wiki, y lo mostramos en pantalla
    document.querySelector('#wiki').style.visibility = 'visible';
    //Oke.sound.play();
    // LLamada a la función startwiki() que comenzará el proceso de mostrar los Pokemon
    startWiki();
});


const startWiki = async () => {
    
        await fetch("https://ddragon.leagueoflegends.com/cdn/14.18.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            // Convertimos la respuesta de la API en un objeto JSON
            }).then(function(result) {
                for (let champion in result.data) {
                    let data = result.data[champion];
                    let champ = new Champ(data);
                    champ.setImg(skinsDeterminadas(champ.id)); ///
                    pushChamp(champ);
                }
                
            });
    
            console.log(champs);

    await showWiki();
};

function skinsDeterminadas(champ){
    switch(champ){
        case 'Ahri':
            return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_27.jpg`
        case 'Pyke':
            return`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_44.jpg`
        default:
            return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`
    }
}

// Esta función añade el champ que se le pasa como parámetro al array
function pushChamp(champ) {
    champs.push(champ);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showWiki = async () => {
    // Se obtiene una referencia al elemento con el ID wiki en el DOM donde se insertarán las tarjetas de los Pokemon.
    const wiki = document.getElementById("wiki");
    // Iteramos sobre cada elemento del array champs
    for(var i = 0; i < champs.length; i++) {


        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor wiki
        wiki.innerHTML +=    `<div class="champSelect">
                                    <div class="description">
                                    <img class="imgChamp" src="${champs[i].img}"><br>
                                    <p>${champs[i].description}</p>
                                    </div>
                                    <div class="nombre">
                                    ${champs[i].name}<br>
                                    "${champs[i].title}"<br>
                                    </div>
                                    <div class="resource">
                                        ${champs[i].champ_resource}
                                    </div>
                                </div>`
    }
}
