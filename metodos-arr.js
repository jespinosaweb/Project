let articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 1700},
];


//let articulosFiltrados = articulos.filter(function(articulos){                  //opcion 1  filter
//     return articulos.costo <= 500
//});


//let nombreArticulos = articulos.map(function(articulos){                        //opcion 2 map
//    return articulos.nombre
//});


//let buscarArticulo = articulos.find(function(articulo){                          //opcion 3 find
//    return articulo.nombre === "laptop"
//});


//articulos.forEach(function(articulo){                                            //opcion 4 forEach
//    console.log(articulo.nombre);
//})


let articulosBaratos = articulos.some(function(articulo){                           // opcoin 5 
    return articulo.costo <= 700;
})




for(let i = 0; i < articulosFiltrados.length; i++) {
    console.log(articulosFiltrados[i]);
}




