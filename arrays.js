let objetos = ["zapatos", "camisas", "pantalones", "gorras"];

console.log(objetos);                                   // ver item del arrays
console.log(objetos.length);                            // ver cantidad de objetos del array
console,log(objetos[0]);                                // buscar objetos por el indice se empieza por 0

                                                        // mutar item de una arrays
let agregarObjeto = objetos.push("corbatas");           //agregar item al final del arrays
let agregarInicio = objetos.unshift("medias");          //agregar item al principio del arrays             

let eliminarObjeto = objetos.pop("carbatas");           //eliminar item al final del arrays
let eliminarInicio = objetos.shift("medias");           //eliminar iitem al principio del array

let posicion = objetos.indexOf("camisas");               //saber la posicion del item en el arrays
