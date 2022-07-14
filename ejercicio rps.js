var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

function result(user, cpu) {
    if (user === op1 && cpu === op3) {
        console.log("Ganaste con " + op1)
    } else if (user === op2 && cpu === op1) {
        console.log("Ganaste con " + op2)
    } else if (user === op3 && cpu === op2) {
        console.log("Ganaste con " + op3)
    } else if(user === cpu) {
        console.log("Empate")
    } else {
        console.log("Perdiste")
    }
}