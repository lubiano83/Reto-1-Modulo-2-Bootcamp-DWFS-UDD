const jugador1 = prompt("Ingresa Piedra, Papel o Tijera").toLowerCase();
const jugador2 = prompt("Ingresa Piedra, Papel o Tijera").toLowerCase();

if(jugador1 === jugador2) {
    alert("Empate");
} else {
    if(jugador1 === "piedra") {
        if(jugador2 === "papel") {
            alert("Jugador 2 gana");
        } else {
            alert("Jugador 1 gana");
        }
    } else if(jugador1 === "papel") {
        if(jugador2 === "tijera") {
            alert("Jugador 2 gana");
        } else {
            alert("Jugador 1 gana");
        }
    } else if(jugador1 === "tijera") {
        if(jugador2 === "piedra") {
            alert("Jugador 2 gana");
        } else {
            alert("Jugador 1 gana");
        }
    } else {
        alert("No es un tipo valido");
    }
}