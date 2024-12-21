const number = 5;
const frutas = []

for ( i = 0; i < number; i++ ) {
    const fruta = prompt('Ingrese una fruta');
    frutas.push(fruta);
}

frutas.forEach(fruta => alert(fruta));