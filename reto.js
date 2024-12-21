const peso = parseInt(prompt("Ingresa tu peso"));
const altura = parseFloat(prompt("Ingresa tu altura"));

if(isNaN(peso) || isNaN(altura)) {
    alert("Debe ingresar su peso y altura en numeros")
} else {
    const imc = peso / (altura * altura);
    const imcAjustado = imc.toFixed(2); // Devuelve solo 2 decimales

    alert(`Su IMC es de: ${imcAjustado}`)
    
    if(imcAjustado < 18.5) {
        alert("Esta por debajo del peso normal")
    } else if(imcAjustado >= 18.5 && imcAjustado < 24.9) {
        alert("Peso normal")
    } else if( imcAjustado >= 24.9 && imcAjustado < 29.9 ) {
        alert("Sobrepeso")
    } else if( imcAjustado >= 29.9 && imcAjustado < 34.9) {
        alert("Ebesidad grado 1")
    } else if( imcAjustado >= 34.9 && imcAjustado < 39.9 ) {
        alert("Ebesidad grado 2")
    } else {
        alert("Ebesidad grado 3")
    }
}

