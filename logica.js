function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}


function solicitarNumero() {
    let numero;
    do {
        numero = prompt("Por favor, ingresa un número:");

        if (isNaN(numero)) {
            alert("Error: Debes ingresar un número válido.");
        }
    } while (isNaN(numero));
    return parseInt(numero);
}


function main() {
    const numero = solicitarNumero();
    const factorial = calcularFactorial(numero);

    document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${factorial}`;
}

window.onload = main;
