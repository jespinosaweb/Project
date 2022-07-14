let personas = ["Jorge", "Manuel", "Robe", "Maria"];

function saludar(personas) {
    console.log("hola " + personas);
}

for(let i = 0; i < personas.length; i++){                    // opcion 1
    saludar(personas[i]);
}


for(let listado of personas) {                               // opcion 2
    saludar(listado);
}


//loops: while

let personas = ["Jorge", "Manuel", "Robe", "Maria"];        // opcion 3 va eliminando objetos del arrays

function saludar(personas) {
    console.log("hola " + personas);
}

while(personas.length > 0) {
    let listado = personas.shift();
    saludar(listado);     
}


