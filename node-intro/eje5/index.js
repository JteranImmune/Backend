let obj = require('./objeto.js');

const listaPaises = [];
const paisesFavoritos = [];

const paises = () =>{
    
    for (let pais in obj.paises) {
        obj.paises[pais].forEach(pais => {
            listaPaises.push(pais)
        });
    };

    obj.favoritos.forEach((paisFavorito) =>{
        if(paisFavorito <= listaPaises.length){
            paisesFavoritos.push(listaPaises[paisFavorito - 1]);
        }
    });

    return paisesFavoritos;
}

paises();

console.log(`Los países favoritos de ${obj.nombre} son ${paisesFavoritos.join(', ')}.`);