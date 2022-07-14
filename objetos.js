var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);

    }
};




function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "model 3", 2020);
