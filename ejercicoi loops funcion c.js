let cantidadAutos = prompt("Introduce la cantidad de Autos");                
let autos = [];

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(let i = 0; i < cantidadAutos; i++) {
    let marca = prompt("Introducir Marca del Auto");
    let modelo = prompt("Introducir Modelo del Auto");
    let annio = prompt("Introducir Año del Auto");
    autos.push(new auto(marca, modelo, annio));
}

for(let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}





