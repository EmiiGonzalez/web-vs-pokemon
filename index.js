(function (){
    const lista = document.querySelector(".pokemon-list")
const nuevaBatalla = document.querySelector(".btn-nueva-batalla")


const consultarPokemon = (id, num) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) =>{
    response.json()
    .then((pokemon)=>{
        crearPokemon(pokemon, num)
        })
    });
};

const consultarPokemones = () => {
    let primerId = Math.round(Math.random() * 150);
    let segundoId = Math.round(Math.random() * 150);

    consultarPokemon(primerId, 1);
    consultarPokemon(segundoId, 2);
}

const crearPokemon = (pokemon, num) => {
    //conversion de datos a html

    const item = document.getElementById(`pokemon-${num}`);
    const imagen = item.querySelector(".img-pokemon");
    const nombre = item.querySelector(".nombre-pokemon");
    const tipo = item.querySelector(".pokemon-tipo")
    const tipo_img = item.querySelector(".pokemon-img-tipo")
    
    imagen.setAttribute("src", pokemon.sprites.front_default);
    nombre.textContent = pokemon.name
    tipo.textContent = `TYPE: ${pokemon.types[0].type.name.toUpperCase()}`
    tipo_img.setAttribute("src", `tipos/${pokemon.types[0].type.name}.webp`)
}


consultarPokemones()
nuevaBatalla.addEventListener("click", consultarPokemones);
}) ()