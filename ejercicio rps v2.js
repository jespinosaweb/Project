const op1 = "piedra";
const op2 = "papel";
const op3 = "tijera";

function result(user, cpu){
switch (true) {
    case user === op1 && cpu === op3:
        console.log("Ganas con " + op1);
        break;
    case user === op2 && cpu === op1:
        console.log("Ganas con  " + op2);
        break;
    case user === op3 && cpu === op2:
        console.log("Ganas con " + op3);
        break;
    case user === cpu:
        console.log("Empate");
        break;
    default:
        console.log("Pierdes");
}}